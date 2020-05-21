new Vue({
    // state
    data () {
      return {
        count: 0
      }
    },
    // view
    template: `
      <button @click='press'>{{ count }}</button>
    `,
    // actions
    methods: {
      press() {
        this.count++
      }
    }
  })