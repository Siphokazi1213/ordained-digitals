'use server';
import { google } from 'googleapis';

export async function submitInquiry(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const goals = formData.get('goals');

  // PRE-FLIGHT CHECK
  const envKey = process.env.GOOGLE_PRIVATE_KEY;
  const envEmail = process.env.GOOGLE_CLIENT_EMAIL;

  console.log("--- PRE-FLIGHT DEBUG ---");
  console.log("Key Variable Exists:", !!envKey);
  console.log("Email Variable Exists:", !!envEmail);
  
  if (!envKey || !envEmail) {
    console.error("STOP: Environment variables are not reaching the server.");
    return { success: false, error: "Missing Env Vars" };
  }

  try {
    // Convert literal \n to actual newlines and clean quotes
    const privateKey = envKey
      .replace(/\\n/g, '\n')
      .replace(/"/g, '')
      .replace(/'/g, '')
      .trim();

    // THE FIX: Using the modern Options Object constructor
    const auth = new google.auth.JWT({
      email: envEmail.trim(),
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID?.trim(),
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, goals, new Date().toLocaleString('en-ZA')]],
      },
    });

    console.log("✓ SUCCESS: Lead synced to Google Sheets.");
    return { success: true };
  } catch (error: any) {
    console.error('--- GOOGLE API ERROR ---');
    console.error('Code:', error.code);
    console.error('Message:', error.message);
    return { success: false };
  }
}