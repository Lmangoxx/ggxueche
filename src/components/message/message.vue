<template>
<div class="vue-message" :id="mergedOption.id" v-show="showing">
    <i v-show="mergedOption.icon != null" :class="mergedOption.icon"></i>
    <p class="mt-10 mb-10" v-html="mergedOption.message"></p>
</div>
</template>

<script>
const defaultOpt = {
    id: 'easy-message-default',
    message: '',
    icon: '',
    parent: 'body',
    duration: 2500
}
export default {
    defaultOpt: defaultOpt,
    name: 'message',
    data () {
        return {
            queue: [],
            option: {},
            showing: false
        }
    },
    computed: {
        mergedOption () {
            return Object.assign({}, defaultOpt, this.option)
        }
    },
    watch: {
        queue () {
            let pending = this.queue.length
            if (pending === 0) return

            this.showing = true
            this.option = this.queue[0]

            setTimeout(() => {
                this.showing = false
                this.queue.shift()
            }, this.mergedOption.duration)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../static/style/mixin';
.vue-message {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: rem(150px);
    font-size: rem(28px);
    color: #fff;
    text-align: center;
    padding: rem(36px);
    border-radius: rem(10px);
    background-color: rgba(0, 0, 0, .9);
    transform: translate(-50%, -50%);
    z-index: 99999;
    i {
		width: rem(65px);
		height: rem(65px);
		font-size: rem(55px);
    }
}
</style>
