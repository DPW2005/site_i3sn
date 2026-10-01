// ============================================================
// Google Apps Script — I3SN Formulaires → Google Sheet
// ============================================================
// Instructions :
// 1. Ouvrez votre Google Sheet
// 2. Extensions → Apps Script
// 3. Remplacez tout le contenu par ce script
// 4. Sauvegardez puis : Déployer → Nouveau déploiement
//    → Type : Application Web
//    → Accès : Tout le monde (anonyme)
// 5. Copiez l'URL et collez-la dans .env.local
// ============================================================

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var type = e.parameter.type || 'contact';
    
    // Obtenir ou créer la feuille selon le type
    var sheetName = type === 'newsletter' ? 'Newsletter' : 'Contact';
    var sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Créer les en-têtes selon le type
      if (type === 'newsletter') {
        sheet.getRange(1, 1, 1, 4).setValues([['Date', 'Nom', 'Email', 'Type']]);
      } else {
        sheet.getRange(1, 1, 1, 7).setValues([['Date', 'Nom', 'Email', 'Téléphone', 'Objet', 'Message', 'Type']]);
      }
      sheet.getRange(1, 1, 1, sheet.getLastColumn())
        .setFontWeight('bold')
        .setBackground('#0B4F9E')
        .setFontColor('#ffffff');
    }
    
    var date = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Douala' });
    
    if (type === 'newsletter') {
      sheet.appendRow([
        date,
        e.parameter.name || '',
        e.parameter.email || '',
        'newsletter'
      ]);
    } else {
      sheet.appendRow([
        date,
        e.parameter.name || '',
        e.parameter.email || '',
        e.parameter.phone || '',
        e.parameter.subject || '',
        e.parameter.message || '',
        'contact'
      ]);
      
      // Optionnel : Envoyer une notification email au propriétaire du sheet
      // MailApp.sendEmail({
      //   to: Session.getActiveUser().getEmail(),
      //   subject: '📬 Nouveau message I3SN : ' + (e.parameter.subject || 'Contact'),
      //   body: 'Nom: ' + e.parameter.name + '\nEmail: ' + e.parameter.email + '\n\nMessage:\n' + e.parameter.message
      // });
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'I3SN Forms API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
