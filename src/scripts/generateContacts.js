import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';


const generateContacts = async (number) => {
    try {
        // Читаем существующие контакты из файла
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        // Генерируем новые контакты
        const newContacts = Array.from({ length: number }, createFakeContact);

        // Добавляем новые контакты к существующим
        const updatedContacts = [...contacts, ...newContacts];

        // Записываем обновленные контакты обратно в файл
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');

        console.log(`${number} contacts generated and added to the file.`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

// Получаем количество контактов из аргументов командной строки
generateContacts(5);
