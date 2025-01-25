async function loadCodeTaskS(value, css) {
    if (value >= 5) {
        const fileUrlHTML = `https://raw.githubusercontent.com/A-N-O-N-Y-M/informatics-project/refs/heads/main/Tasks/Task${value}/index.html`;
        const fileUrlHTML2 = `https://raw.githubusercontent.com/A-N-O-N-Y-M/informatics-project/refs/heads/main/Tasks/Task${value}/building.html`;
        const fileUrlHTML3 = `https://raw.githubusercontent.com/A-N-O-N-Y-M/informatics-project/refs/heads/main/Tasks/Task${value}/dictionary.html`;
        const fileUrlHTML4 = `https://raw.githubusercontent.com/A-N-O-N-Y-M/informatics-project/refs/heads/main/Tasks/Task${value}/functions.html`;
        const fileUrlHTML5 = `https://raw.githubusercontent.com/A-N-O-N-Y-M/informatics-project/refs/heads/main/Tasks/Task${value}/questionnaire.html`;
        const fileUrlCSS = `https://raw.githubusercontent.com/A-N-O-N-Y-M/informatics-project/refs/heads/main/Tasks/Styles/style${css}.css`;
        try {
            const response = await fetch(fileUrlHTML);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            document.getElementById("code-container-html").textContent = code;
            hljs.highlightElement(document.getElementById("code-container-html"));
        }
        catch (error) {
            console.error("Failed to load code:", error);
            document.getElementById("code-container-html").textContent = "Ошибка при загрузке кода. Перейдите на репозиторий по ссылке: https://github.com/A-N-O-N-Y-M/informatics-project/tree/main/Tasks";
        }
        try {
            const response = await fetch(fileUrlCSS);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            document.getElementById("code-container-css").textContent = code;
            hljs.highlightElement(document.getElementById("code-container-css"));
        }
        catch (error) {
            console.error("Failed to load code:", error);
            document.getElementById("code-container-css").textContent = "Ошибка при загрузке кода. Перейдите на репозиторий по ссылке: https://github.com/A-N-O-N-Y-M/informatics-project/tree/main/Tasks";
        }
        try {
            const response = await fetch(fileUrlHTML2);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            document.getElementById("code-container-html2").textContent = code;
            hljs.highlightElement(document.getElementById("code-container-html2"));
        }
        catch (error) {
            console.error("Failed to load code:", error);
            document.getElementById("code-container-html2").textContent = "Ошибка при загрузке кода. Перейдите на репозиторий по ссылке: https://github.com/A-N-O-N-Y-M/informatics-project/tree/main/Tasks";
        }
        try {
            const response = await fetch(fileUrlHTML3);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            document.getElementById("code-container-html3").textContent = code;
            hljs.highlightElement(document.getElementById("code-container-html3"));
        }
        catch (error) {
            console.error("Failed to load code:", error);
            document.getElementById("code-container-html3").textContent = "Ошибка при загрузке кода. Перейдите на репозиторий по ссылке: https://github.com/A-N-O-N-Y-M/informatics-project/tree/main/Tasks";
        }
        try {
            const response = await fetch(fileUrlHTML4);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            document.getElementById("code-container-html4").textContent = code;
            hljs.highlightElement(document.getElementById("code-container-html4"));
        }
        catch (error) {
            console.error("Failed to load code:", error);
            document.getElementById("code-container-html4").textContent = "Ошибка при загрузке кода. Перейдите на репозиторий по ссылке: https://github.com/A-N-O-N-Y-M/informatics-project/tree/main/Tasks";
        }
        try {
            const response = await fetch(fileUrlHTML5);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            document.getElementById("code-container-html5").textContent = code;
            hljs.highlightElement(document.getElementById("code-container-html5"));
        }
        catch (error) {
            console.error("Failed to load code:", error);
            document.getElementById("code-container-html5").textContent = "Ошибка при загрузке кода. Перейдите на репозиторий по ссылке: https://github.com/A-N-O-N-Y-M/informatics-project/tree/main/Tasks";
        }
    }
    else if (value <= 4) {
        const fileUrl = `https://raw.githubusercontent.com/A-N-O-N-Y-M/informatics-project/refs/heads/main/Tasks/Task${value}/index.html`;
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const code = await response.text();
            document.getElementById("code-container").textContent = code;
            hljs.highlightElement(document.getElementById("code-container"));
        }
        catch (error) {
            console.error("Failed to load code:", error);
            document.getElementById("code-container").textContent = "Ошибка при загрузке кода. Перейдите на репозиторий по ссылке: https://github.com/A-N-O-N-Y-M/informatics-project/tree/main/Tasks";
        }
    }
}