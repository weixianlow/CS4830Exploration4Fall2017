var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    show: true
  }
})

var app1 = new Vue({
  el: '#cssTransition',
  data: {
    show: true
  }
})

var app2 = new Vue({
  el: '#cssAnimation',
  data: {
    show: true
  }
})

var app3 = new Vue({
  el: '#list-demo',
  data: {
    items: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  }
})
