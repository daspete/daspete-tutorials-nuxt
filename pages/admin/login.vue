<template>
    <div class="login">
        <Card style="width: 500px; margin: 40px auto;">
            <div slot="title">Login</div>
            <Form ref="loginform" :model="credentials" :rules="rules">
                <FormItem prop="email">
                    <Input type="text" v-model="credentials.email" placeholder="user@api.dev"></Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="credentials.password" placeholder="123456"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" long :loading="loading" v-on:click="submitLogin">Einloggen</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script>
export default {


    // Define the current page layout here
    layout: 'master',


    // Set the meta data of the current page here
    head: {
        title: 'Admin Login'
    },


    // before a page is rendered, we can create middleware functions
    // to check, if a user can view this page
    middleware: [
        'isLoggedIn'
    ],

    // we have to register our page components here
    components: {
        
    },


    // here we are preloading all the datas, we need to have before rendering (for seo, and so on)
    async asyncData(context){
        // return datas here
        return {
            loading: false,
            credentials: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: 'Geben Sie Ihre E-Mailadresse ein.', trigger: 'blur' },
                    { type: 'email', message: 'Geben Sie eine korrekte E-Mailadresse ein.', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Geben Sie Ihr Passwort ein.', trigger: 'blur' }
                ]
                
            }
        }
    },
    
    methods: {
        submitLogin(){
            this.loading = true;

            this.$refs.loginform.validate((isValid) => {
                if(isValid){
                    this.login(this.credentials);
                }else{
                    this.$Message.error('Bitte überprüfen Sie Ihre Eingaben.');
                }
            });
        },
        
        async login(credentials){
            try{
                await this.$store.dispatch('auth/login', credentials);

                this.loading = false;

                this.$Message.success('Sie wurden erfolgreich eingeloggt.');

                this.$router.push('/admin');
            }catch(err){
                this.$Message.error('Bitte überprüfen Sie Ihre Daten.');

                this.loading = false;

                throw err;
            }
        }
           
    }

}
</script>