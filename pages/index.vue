<template>

    <div class="home">
        <top-bar></top-bar>
    </div>


    <!--div class="layout">
        <Row type="flex">
            <Col :span="6" class="layout-menu-left">
                
                <Menu active-name="">
                    <div class="layout-logo-left"></div>

                    <MenuItem name="1">
                        <Icon type="ios-keypad" :size="14"></Icon>
                        <span class="layout-text">Testing 1</span>
                    </MenuItem>

                    <MenuItem name="2">
                        <Icon type="ios-keypad" :size="14"></Icon>
                        <span class="layout-text">Testing 2</span>
                    </MenuItem>

                    <MenuItem name="3">
                        <Icon type="ios-keypad" :size="14"></Icon>
                        <span class="layout-text">Testing 3</span>
                    </MenuItem>

                    <MenuItem name="4">
                        <Icon type="ios-keypad" :size="14"></Icon>
                        <span class="layout-text">Testing 4</span>
                    </MenuItem>
                </Menu>

            </Col>
            <Col :span="18">

                <div class="layout-header">
                    <Button type="text">
                        <Icon type="navicon" :size="32"></Icon>
                    </Button>
                </div>

                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">Home</BreadcrumbItem>
                        <BreadcrumbItem href="#">Index</BreadcrumbItem>
                        <BreadcrumbItem>Title</BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <div class="layout-content">
                    <div class="layout-content-main">
                        Main Content
                    </div>
                </div>

                <div class="layout-copy">
                    &copy; 2017 DasPeTe
                </div>

            </Col>

        
        </Row>
    </div-->

    <!--div class="container">
        <div class="navi">NAV</div>
        
        <login v-if="!$store.getters['auth/IsAuthenticated']" v-on:login-success="onLoggedIn"></login>
        <logout v-if="$store.getters['auth/IsAuthenticated']" v-on:logout-success="onLoggedOut"></logout>

        <button v-on:click="checkLogin">Testing</button>

        <tutorials></tutorials>
    </div-->
</template>

<script>

import TopBar from '~/components/organisms/TopBar.vue'

export default {

    layout: 'master',

    middleware: [
        'auth'
    ],

    components: {
        TopBar
    },

    asyncData(){
        return {}
    },

    methods: {
        onMenuItemSelect(menuItemName){
            
        },
        checkLogin(){
            console.log(this.$store.getters['auth/Datas']);
        },

        onLoggedIn(){
            console.log('auth', this.$store.state.auth);
            console.log('auth getter', this.$store.getters['auth/Datas']);
        },

        onLoggedOut(){
            console.log('auth', this.$store.state.auth);
            console.log('auth getter', this.$store.getters['auth/Datas']);
        }

        
    }

}
</script>