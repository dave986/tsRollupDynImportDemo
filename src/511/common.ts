function sayHello() {
    console.log('Hello from 511');
}

function getConfigFieldset(channel: 'A'|'B') {
    const resultDiv = document.getElementById('resultContent');
    if (!resultDiv) {
        throw new Error('Element #resultContent not found');
    }
    resultDiv.innerHTML = `Hi! I am the content for channel ${channel} in design 511`;
}

export { sayHello, getConfigFieldset };
export default getConfigFieldset;