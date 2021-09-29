// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      //data
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
      //do something when component first attached
        console.log(this.data.message);
      },
      update:function(){
        //Do something when component's data update
      },
      remove:function(){
        //Do something the componentor its entity is detected
      },
      tick:function(){
        //Do something on every scene tick or frame
      }
  });