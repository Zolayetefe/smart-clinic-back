const { PrismaClient } = require('../src/generated/prisma'); 
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@smartclinic.com';
  const adminPassword = 'admin123';

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'System Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'admin', // Ensure "admin" exists in the Role enum in your schema
      phone: '1234567890',  // Added required phone field
      department: 'Administration'  // Added required department field
    },
  });

  console.log('✅ Admin user created:', admin.email);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
