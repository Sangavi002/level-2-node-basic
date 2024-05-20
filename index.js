const fs = require('fs');

// Function to read the contents of a file
const readFile = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file '${filePath}':`, err);
        } else {
            console.log(`Contents of file '${filePath}':\n`, data);
        }
    });
};

// Function to delete a file
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file '${filePath}':`, err);
        } else {
            console.log(`File '${filePath}' deleted`);
        }
    });
};

// Function to create a file
const createFile = (filePath) => {
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error(`Error creating file '${filePath}':`, err);
        } else {
            console.log(`File '${filePath}' created`);
        }
    });
};

// Function to append content to a file
const appendFile = (filePath, content) => {
    fs.appendFile(filePath, `${content}\n`, (err) => {
        if (err) {
            console.error(`Error appending content to file '${filePath}':`, err);
        } else {
            console.log(`Content appended to file '${filePath}'`);
        }
    });
};

// Function to rename a file
const renameFile = (oldPath, newPath) => {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error(`Error renaming file '${oldPath}' to '${newPath}':`, err);
        } else {
            console.log(`File '${oldPath}' renamed to '${newPath}'`);
        }
    });
};

// Function to list all files and directories in a directory
const listDirectory = (directoryPath) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Error listing directory '${directoryPath}':`, err);
        } else {
            console.log(`Contents of directory '${directoryPath}':`);
            files.forEach(file => {
                console.log(file);
            });
        }
    });
};

// Parse command line arguments
const [,, operation, ...args] = process.argv;

// Perform operation based on the command
switch(operation) {
    case 'read':
        readFile(args[0]);
        break;
    case 'delete':
        deleteFile(args[0]);
        break;
    case 'create':
        createFile(args[0]);
        break;
    case 'append':
        appendFile(args[1], args[0]);
        break;
    case 'rename':
        renameFile(args[0], args[1]);
        break;
    case 'list':
        listDirectory(args[0]);
        break;
    default:
        console.error('Invalid operation. Please use one of: read, delete, create, append, rename, list');
}
