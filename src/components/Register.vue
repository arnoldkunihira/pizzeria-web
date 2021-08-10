<template>
    <main>
        <div class="container">
            <main class="form-signin text-center">
                <form  @submit.prevent="handleSubmit">
                    <a href="/">
                        <img class="mb-4" src="/src/assets/pizza.png" alt="" width="72" height="57">
                    </a>
                    <h1 class="h3 mb-3 fw-normal">Welcome to Pizza Hub</h1>
                    <h2 class="h3 mb-3 fw-normal">Please Register</h2>
                
                    <div v-if="showSuccess" class="alert alert-success d-flex align-items-center" role="alert">
                        <BootstrapIcon icon="check-circle-fill" /> 
                        <div>
                            Account created. Go to log in.
                        </div>
                    </div>

                    <div v-if="showFailed" class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
                        <BootstrapIcon icon="exclamation-triangle-fill" /> &nbsp;
                        <div>
                            Error occurred. Try again.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>

                    <div class="form-floating">
                        <input type="name" class="form-control" id="floatingName" placeholder="Name" v-model="name">
                        <label for="floatingName">Name</label>
                    </div>
                    
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
                        <label for="floatingInput">Email Address</label>
                    </div>
                    
                    <div class="form-floating">
                        <input 
                            type="password" 
                            class="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            v-model="password" 
                            :disabled="submitting">
                        <label for="floatingPassword">Password</label>
                    </div>
                    
                    <div class="form-floating">
                        <input 
                            type="password" 
                            class="form-control" 
                            id="passwordConfirmation" 
                            placeholder="Password Confirmation" 
                            v-model="password_confirmation" 
                            :disabled="submitting">
                        <label for="passwordConfirmation">Confirm Password</label>
                    </div>
                    
                    <button class="w-100 btn btn-lg btn-primary" type="submit" :disabled="submitting">
                        <div class="spinner-border text-light" role="status" v-if="submitting">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <span v-if="!submitting">Register</span>
                    </button>

                    <h6 class="mt-2 text-muted">If you already have an account?</h6>
                    <p class="mt-2 mb-3 text-muted"><a href="/login">Login Here</a></p>
                    <p class="mt-4 mb-3 text-muted">&copy; 2021 Pizza Hub, Inc</p>
                </form>
            </main>
        </div>
    </main>
</template>

<script >
import api from '../utils/requests';

export default {
    data () {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            submitting: false,
            showSuccess: false,
            showFailed: false
        }
    },
    methods: {
        handleSubmit(e) {
            let currentObject = this;
        
            const response = api().post('/register', {
                name: this.name, 
                email: this.email, 
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(function (response) {
                const data = response.data;
                console.log(data);
                
                if (data.status === 'success') {
                    currentObject.showSuccess = true;
                } else {
                    currentObject.showSuccess = false;
                    currentObject.showFailed = true;
                }
            }).catch(function () {
                currentObject.showFailed = true;
            });
        }
    }
}

</script>

<style scoped>

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 430px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="name"] {
    margin-bottom: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="email"] {
    margin-bottom: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

</style>
