

import logo from '../Header/logo/food.png'
const Header = () => {
   
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#e3f2fd"}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="logo"> <img src={logo} alt="" width="200" height="100" class="d-inline-block align-text-top"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="menu">Menu</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="about">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="shop">Shop</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="contact">Contact</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;