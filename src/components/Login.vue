<template>
    <main>
        <div class="container">
            <main class="form-signin text-center">
                <form @submit.prevent="handleSubmit">
                    <a href="/">
                        <img class="mb-4" src="/src/assets/pizza.png" alt="" width="72" height="57">
                    </a>
                    <h1 class="h3 mb-3 fw-normal">Welcome to Pizza Hub</h1>
                    <h2 class="h3 mb-3 fw-normal">Please Log in</h2>

                    <div v-if="showSuccess" class="alert alert-success d-flex align-items-center" role="alert">
                        <BootstrapIcon icon="check-circle-fill" /> 
                    <div>
                        Login successful.
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
                        <input 
                            required
                            type="email" 
                            class="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            v-model="email">
                        <label for="floatingInput">Email Address</label>
                    </div>
                    <div class="form-floating">
                        <input 
                            required
                            type="password" 
                            class="form-control" 
                            id="floatingPassword" 
                            placeholder="Password"
                            v-model="password">
                        <label for="floatingPassword">Password</label>
                    </div>
                
                    <button class="w-100 btn btn-lg btn-primary" type="submit" :disabled="submitting">
                        <span v-if="submitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> &nbsp;
                        <span class="visually-hidden">Loading...</span>
                        <span v-if="!submitting">Log in</span>
                    </button>
                    <h6 class="mt-2 text-muted">If you have no account?</h6>
                    <p class="mt-2 mb-3 text-muted"><a href="/register">Register Here</a></p>
                    <p class="mt-4 mb-3 text-muted">&copy; 2021 Pizza Hub, Inc</p>
                </form>
            </main>
        </div>
    </main>
</template>

<script>
import api from '../utils/requests';

export default {
    data () {
        return {
            email: '',
            password: '',
            submitting: false,
            showSuccess: false,
            showFailed: false
        }
    },
    methods: {
        handleSubmit() {
            let currentObject = this;
        
            const response = api().post('/login', {
                email: this.email, 
                password: this.password
            }).then(function (response) {
                const data = response.data;
                if (data.status === 'success') {
                    currentObject.showSuccess = true;
                    currentObject.$store.dispatch({
                        type: 'setUser',
                        user:  {
                        ...data.data,
                        token: data.access_token.token
                        }
                    });
                
                    currentObject.$router.push({name: 'Dashboard'});
                } else {
                    currentObject.showSuccess = false;
                    currentObject.showFailed = true;
                }
            }).catch(function () {
                currentObject.showFailed = true;
                currentObject.showSuccess = false;
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