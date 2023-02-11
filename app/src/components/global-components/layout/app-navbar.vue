<template>
    <div class="navbar">
        <img @click="$router.push('./')" class="logo" src="@/assets/logo.svg" alt="logo">
        <nav>
            <ul class="nav-links">
                <li><a href="#">Services</a></li>
                <li><a href="#">Apropos</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Connexion</a></li>
                <li><a href="#">Inscription</a></li>
            </ul>
        </nav>
    </div>    
</template>

<style scoped>
    li,a {
        font-weight: 500;
        font-size: 16px;
        color: #eaf8bf;
        text-decoration: none;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 5%;
        background-color: #24252A;

    }

    .logo{
        width: 100px;
        cursor: pointer;
        margin-top: 10px;
    }

    .nav-links {
        list-style: none;
    }

    .nav-links li {
        display: inline-block;
        padding: 0px 20px;
    }

    .nav-links li a {
        transition: all 0.3s ease 0s;
    }

    .nav-links li a:hover {
        color: #335c67;
    }
</style>