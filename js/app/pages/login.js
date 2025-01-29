export const login = {
    data:function() {
        return {
            img: 1,
            hs: 0,
            parent: ''
        }
    },
    mounted:function() {
        this.img = this.randomIntFromInterval(1, 7);
        this.parent = this.$parent.$parent;
    },
    methods: {
        randomIntFromInterval:function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
    },
    template: `
        <div class="flex">
            Привіт, Світ
        </div>
`};