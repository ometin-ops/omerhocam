const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { studentName, studentEmail } = req.body;

  if (!studentName) {
    return res.status(400).json({ message: 'Student name is required' });
  }

  // Gmail SMTP yapılandırması (Vercel Environment Variables'dan alınacak)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL || 'omerfarukmetin037@gmail.com',
      pass: process.env.SMTP_PASSWORD // Google App Password buraya gelecek
    }
  });

  const mailOptions = {
    from: '"ÖmerHocam Sistem" <no-reply@omerhocam.com>',
    to: 'omerfarukmetin037@gmail.com', // Bildirimin gideceği admin maili
    subject: `Takvim Güncellemesi: ${studentName}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #1b004e;">Ders Programı Güncellendi</h2>
        <p>Merhaba Ömer Hoca,</p>
        <p><strong>${studentName}</strong> (${studentEmail || 'Bilinmiyor'}) isimli öğrenci haftalık ders programında bir güncelleme yaptı ve onayladı.</p>
        <p>Yeni veya güncel saatleri kontrol etmek için Admin panelinize giriş yapabilirsiniz.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #888;">Bu e-posta sistem tarafından otomatik gönderilmiştir.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
  }
}
