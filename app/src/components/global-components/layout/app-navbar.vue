<template>
    <div class="navbar">
        <img @click="$router.push('./')" class="logo" src="@/assets/logo.svg" alt="logo">
        <nav>
            <ul class="nav-links">
                <li><a href="#">Services</a></li>
                <li><a href="#">Apropos</a></li>
                <li><a href="#">Contact</a></li>
                <li><a @click="$router.push('./login')">Connexion</a></li>
                <li><a @click="$router.push('./register')">Inscription</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>

</script>
    
<style scoped>

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 5%;
        background-color: #24252A;
    }

    li,a {
        font-weight: 500;
        font-size: 16px;
        text-decoration: none;
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
        color: #eaf8bf;
    }

    .nav-links li a:hover {
        color: #335c67;
    }
</style>