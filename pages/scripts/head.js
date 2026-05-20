// Injecting the header creates significant performance issues

// Inject Footer
var footer = `<footer class="footer">
        <h3>Jase Scott</h3>
        <p class="contactInfo"><a href="mailto:jase.s.5273@gmail.com" target="_blank">jase.s.5273@gmail.com</a> | <a
                href="https://github.com/JScott3234" target="_blank">JScott3234/Github.com</a></p>

    </footer>`;

document.getElementById("footer").innerHTML = footer;