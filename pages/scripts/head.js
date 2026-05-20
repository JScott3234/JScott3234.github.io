// Inject Header - wayyy easier to maintain now lol
var header = `<nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark box-shadow pb-3 pt-2"
            style="background-color: #162957;">
            <div class="container">
                <a class="navbar-brand" href="../index.html" style="color: mintcream;">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/education.html">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/leadership.html">Leadership</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/research.html">Research</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

const head = document.querySelector('#header');
head.insertAdjacentHTML('afterbegin', header);

// Inject Footer
var footer = `<footer class="footer">
        <h3>Jase Scott</h3>
        <p class="contactInfo"><a href="mailto:jase.s.5273@gmail.com" target="_blank">jase.s.5273@gmail.com</a> | <a
                href="https://github.com/JScott3234" target="_blank">JScott3234/Github.com</a></p>

    </footer>`;

document.getElementById("footer").innerHTML = footer;