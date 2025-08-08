function mostrarStock() {
    let elemento = document.getElementById('caja');
    elemento.innerHTML =  
        '<p>' + 'En este link, presento un sistema de generación de archivos .txt que será usado dentro del sistema de stock para el INAREPS' + '</p>' +
        '<br>' +
        '<p>' + 'Herramientas:' + '</p>' +
        '<ul>' +
            '<li>' + 'HTML' + '</li>' +
            '<li>' + 'JS<' + '/li>' +
            '<li>' + 'NodeJS' + '</li>' +
        '</ul>' +
        '<br>' +

        '<a href="https://github.com/DamiiMartinez/Sistema-de-Stock-INAREPS" target="_blank">' +
        'https://github.com/DamiiMartinez/Sistema-de-Stock-INAREPS' +
        '</a>';

    document.getElementById('stock').style.color = 'red';
    document.getElementById('blog').style.color = '#333';
    document.getElementById('pki').style.color = '#333';
    document.getElementById('inet').style.color = '#333';
    document.getElementById('eCommerce').style.color = '#333';
}

function mostrarPKI() {
    let elemento = document.getElementById('caja');
    elemento.innerHTML =  
        '<p>' + 'Este proyecto es una Infraestructura de Clave Pública que emite certificados digitales para la Escuela de Educación Secundaria Técnica' + '</p>' +
        '<br>' +
        '<p>' + 'Herramientas:' + '</p>' +
        '<ul>' +
            '<li>' + 'HTML' + '</li>' +
            '<li>' + 'JS<' + '/li>' +
            '<li>' + 'NodeJS' + '</li>' +
        '</ul>' +
        '<br>' +
        '<a href="https://github.com/DamiiMartinez/PKI-EEST-N-2" target="_blank">' +
        'https://github.com/DamiiMartinez/PKI-EEST-N-2' +
        '</a>';

    document.getElementById('pki').style.color = 'red';
    document.getElementById('stock').style.color = '#333';
    document.getElementById('blog').style.color = '#333';
    document.getElementById('inet').style.color = '#333';
    document.getElementById('eCommerce').style.color = '#333';
}

function mostrarINET() {
    let elemento = document.getElementById('caja');
    elemento.innerHTML =  
        '<p>' + 'Este link, te redirigirá a un eCommerce que se desarrolló para las Olimpiadas del INET' + '</p>' +
        '<br>' +

        '<p>' + 'Herramientas:' + '</p>' +
        '<ul>' +
            '<li>' + 'HTML' + '</li>' +
            '<li>' + 'JS' + '</li>' +
            '<li>' + 'NodeJS' + '</li>' +
        '</ul>' +
        '<br>' +

        '<a href="https://github.com/DamiiMartinez/eCommerce" target="_blank">' +
            'https://github.com/DamiiMartinez/eCommerce' +
        '</a>';

    document.getElementById('inet').style.color = 'red';
    document.getElementById('stock').style.color = '#333';
    document.getElementById('pki').style.color = '#333';
    document.getElementById('blog').style.color = '#333';    
    document.getElementById('eCommerce').style.color = '#333';
}

function mostrarBlog() {
    let elemento = document.getElementById('caja');
    elemento.innerHTML =  
        '<p>' + 'El proyecto es un blog, que fue subido a GitHub para ser hosteado en la Webhost RENDER' + '</p>' +
        '<br>' +

        '<p>' + 'Herramientas:' + '</p>' +
        '<ul>' +
            '<li>' + 'HTML' + '</li>' +
            '<li>' + 'JS' + '</li>' +
            '<li>' + 'NodeJS' + '</li>' +
        '</ul>' +

        '<p>'+ 'GitHub:' + '</p>' +
        '<br>' +
        '<a href="https://github.com/DamiiMartinez/Blog" target="_blank">' +
        'https://github.com/DamiiMartinez/Blog' +
        '</a>';

    document.getElementById('blog').style.color = 'red';
    document.getElementById('stock').style.color = '#333';
    document.getElementById('pki').style.color = '#333';
    document.getElementById('inet').style.color = '#333';
    document.getElementById('eCommerce').style.color = '#333';
}

function mostrarECommerce() {
    let elemento = document.getElementById('caja');
    elemento.innerHTML =  
        '<p>' + 'Actualmente, estoy trabajando en un eCommerce de una indumentaria.' + '</p>' +
        '<br>' +

        '<p>' + 'Herramientas:' + '</p>' +
        '<ul>' +
            '<li>' + 'HTML' + '</li>' +
            '<li>' + 'CSS' + '</li>' +
            '<li>' + 'JS' + '</li>' +
            '<li>' + 'NodeJS' + '</li>' +
        '</ul>' +

        '<p>' + 'Render:' + '</p>' +
        '<br>' +
        '<a href="https://angela-indumentaria.onrender.com" target="_blank">' +
            'https://angela-indumentaria.onrender.com' +
        '</a>';

    document.getElementById('eCommerce').style.color = 'red';
    document.getElementById('blog').style.color = '#333';
    document.getElementById('stock').style.color = '#333';
    document.getElementById('pki').style.color = '#333';
    document.getElementById('inet').style.color = '#333';
}