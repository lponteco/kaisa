document.getElementById("header").innerHTML = `
    <header>
        <nav>
            <h1>Kaisa</h1>

            <input type="checkbox" id="menu-toggle" class="menu-toggle">
            <label for="menu-toggle" class="menu-icon">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </label>

            <ul class="nav-links">

            <a href="#" id="dark-mode-toggle" class="dark-mode-toggle">
            <i class="fa-solid fa-moon"></i> </a>

            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre mi</a></li>
            <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>
`;

document.getElementById("section").innerHTML = `
    <section>
        <a name="about"></a>
        <h2 class="titulo-section">Más info</h2>
        <div class="cards-container" id="cards-container"></div>
    </section>
`;

document.getElementById("contacto").innerHTML = `
     <section class="contact">
        <h2>Contacto 📧</h2>
        <a name="contact"></a>
        <form id="formRegistro" action="https://formspree.io/f/xzzbjlyr" method="POST">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre">
          <p class="error1" id="errorName"></p>
      
          <label for="email">Correo electrónico:</label>
          <input type="text" id="email" name="email" placeholder="Tu correo electrónico">
          <p class="error1" id="errorEmail"></p>
      
          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" placeholder="Escribí acá tu mensaje"></textarea>
          <p class="error1" id="errorMessage"></p>
      
          <button id="btnEnviar" disabled type="submit">Enviar</button>
        </form>
      </section>
`;

document.getElementById("footer").innerHTML = `
    <footer>
        <p>💗 Hecho por mi mami 💗</p>
    </footer>
`;