'use server';
import { google } from 'googleapis';

export async function submitInquiry(formData: any) {
  // 1. EXTRACT DATA NODES
  // Note: If you are passing the 'formData' object from the React form
  const name = formData.name;
  const email = formData.email;
  const tier = formData.tier;
  const questions = formData.tierQuestions || {};

  // 2. PRE-FLIGHT CHECK
  const envKey = process.env.GOOGLE_PRIVATE_KEY;
  const envEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!envKey || !envEmail || !sheetId) {
    console.error("PROTOCOL_ERROR: Environment variables missing.");
    return { success: false, error: "Configuration Sync Failed" };
  }

  try {
    // 3. PRIVATE KEY PARSING (Crucial for Vercel/Production)
    const privateKey = envKey
      .replace(/\\n/g, '\n')
      .replace(/"/g, '')
      .replace(/'/g, '')
      .trim();

    const auth = new google.auth.JWT({
      email: envEmail.trim(),
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 4. MAPPING DATA TO THE 13-COLUMN PROTOCOL (A-M)
    const rowValues = [
      name,                                    // A: Name
      email,                                   // B: Email
      tier,                                    // C: Tier
      questions["Aesthetic"] || "",            // D: Essential Q1
      questions["Audience"] || "",             // E: Essential Q2
      questions["Deadline"] || "",             // F: Essential Q3
      questions["Integrations"] || "",         // G: Sovereign Q1
      questions["Manual_Task"] || "",          // H: Sovereign Q2
      questions["Volume"] || "",               // I: Sovereign Q3
      questions["Bottleneck"] || "",           // J: Neural Q1
      questions["Data_Sync"] || "",            // K: Neural Q2
      questions["AI_Level"] || "",             // L: Neural Q3
      new Date().toLocaleString('en-ZA'),      // M: Timestamp
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId.trim(),
      range: 'Sheet1!A:M',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowValues],
      },
    });

    console.log(`✓ SYNC_COMPLETE: Lead [${name}] injected into Sheet A:M.`);
    return { success: true };

  } catch (error: any) {
    console.error('--- ARCHITECTURAL SYNC ERROR ---');
    console.error('Code:', error.code);
    console.error('Message:', error.message);
    return { success: false, error: error.message };
  }
}