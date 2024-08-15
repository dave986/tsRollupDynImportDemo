// This is an object which will be filled ondemand with a function from a module
let getConfigFieldset: Function;
let sayHello: Function;

// Conditionally import a module
async function changeDesign(design: number) {
    try {
        switch (design) {
            case 505:
                getConfigFieldset = await import('./505/common').then((module) => module.default);
                sayHello          = await import('./505/common').then((module) => module.sayHello);
                break;
            case 511:
                getConfigFieldset = await import('./511/common').then((module) => module.default);
                sayHello          = await import('./511/common').then((module) => module.sayHello);
                break;
            default:
                throw new Error(`Unknown design: ${design}`);
        }
    } catch (err) {
        throw err;
    }
}

// Basic control of the demo
function main() {
    const resultDiv = document.createElement('div');
    const resultOptions = document.createElement('form');
    const resultContent = document.createElement('div');

    resultContent.id = 'resultContent';

    resultOptions.method = '#';
    resultOptions.id = 'designForm';
    resultOptions.innerHTML = `
        <label for="design">Design:</label>
        <select id="design">
            <option value="505">505</option>
            <option value="511">511</option>
        </select>
        <button type="submit">Změnit</button>
    `;

    // onChange event
    resultOptions.addEventListener('submit', async (event) => {
        event.preventDefault();

        const selectedDesign = parseInt((document.getElementById('design') as HTMLSelectElement).value);
        await changeDesign(selectedDesign);

        getConfigFieldset('A');  // this is the conditionally imported function either from 505 or 511
        sayHello();              // this is the conditionally imported function either from 505 or 511
    });

    resultOptions.appendChild(resultContent);

    resultDiv.appendChild(resultOptions);
    document.body.appendChild(resultDiv);
}

main();
