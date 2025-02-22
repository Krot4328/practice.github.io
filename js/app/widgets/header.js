export const header = {
    data:function() {
        return {
            user: {},
            parent: "",
            active: 0,
            menu: 0
        }
    },

    watch: {

    },

    mounted() {
        this.parent = this.$parent.$parent.$parent;
    },

    methods: {
        toogleActive() {
            if (this.active == 1) {
                this.active = 0;
            } else {
                this.active = 1;
            }
        }
    },
    
    template: `
        <header class="header">
            <div class="wrapper">
                <div class="flex header-content">
                    <div class="w20 logo ">
                        <img :src="parent.url+'/app/views/images/logo.svg'" />
                    </div>
                    <div class="w70 h-inh">
                        <div id="menu">
                            <i class="fas fa-bars" @click="menu=1"></i>
                            <ul :class="{active:menu == 1}" v-if="parent.user && parent.user.type && parent.user.type=='admin'">
                                <li v-if="menu==1" class="al"><i class="fas fa-times" @click="menu=0"></i></li>
                                <li><router-link :class="{'router-link-active':$route.path.search('campaign')==1}" to="/campaigns"><p>Campaigns <i class="fas fa-bullhorn"></i></p></li>
                                <li><router-link :class="{'router-link-active':$route.path.search('user')==1}" to="/users"><p>Users <i class="fas fa-users"></i></p></li>
                            </ul>

                            <ul :class="{active:menu == 1}" v-if="parent.user && parent.user.type && parent.user.type!='admin'">
                                <li v-if="menu==1" class="al"><i class="fas fa-times" @click="menu=0"></i></li>
                                <li><router-link to="/statistics">Statistics <i class="fas fa-chart-area"></i></router-link></li>
                                <li><router-link to="/ads">Ads <i class="fas fa-image"></i></router-link></li>
                                <li><router-link to="/sites">Sites <i class="fab fa-chrome"></i></router-link></li>
                                <li><router-link to="/payments">Payments <i class="fas fa-credit-card"></i></router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w10 al" id="user-top" v-if="parent.user && parent.user.user">
                        <i @click="toogleActive()" class="fas fa-caret-down"></i>
                        <div id="user-circle" @click="toogleActive()">{{parent.user.user[0]}}</div>

                        <div id="user-info" :class="{active:active == 1}">
                            <a href="#" @click.prevent="parent.logout();"><i class="fas fa-sign-out-alt"></i> {{parent.user.user}} Log out</a>
                        </div>
                    </div>
                </div>
            </div>
            <msg ref="msg" />
        </header>
    `
}