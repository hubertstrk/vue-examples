<template>
  <div id="app">
    <h3>Vue Radial SVG</h3>
    <div class="widget" :style="{height: containerLength, width: containerLength}">
      <div class="el box"></div>
      <svg class="svg" :style="{height: containerLength, width: containerLength}" shape-rendering="geometricPrecision">
        <path id="arc1" fill="none" stroke="rgb(220, 220, 220)" :stroke-width="6" 
          :d="arc(40, 30, 330)" stroke-linecap="round"        />
      </svg>
    </div>
  </div>
</template>

<script>

import anime from 'animejs'

export default {
  data () {
    return {
      length: 150
    }
  },
  methods: {
    polarToCartesian (radius, degrees) {
      const radians = (degrees-90) * Math.PI / 180.0;
      return {
        x: this.center + (radius * Math.cos(radians)),
        y: this.center + (radius * Math.sin(radians))
      }
    },
    arc (radius, startAngle, endAngle) {
      const start = this.polarToCartesian(radius, endAngle)
      const end = this.polarToCartesian(radius, startAngle)
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
      const d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ")
      return d  
    }
  },
  computed: {
    center () {
      return this.length / 2
    },
    containerLength () {
      return this.length + 'px'
    }
  },
  mounted () {
    console.info('start anmiation')
    var path = anime.path('.widget path')

    anime({
      targets: '.widget .el',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2000,
      loop: true
    })
  }
}
</script>

<style>
.box {
  height: 18px; 
  width: 18px; 
  position: absolute;
  top: -9px; 
  left: -9px;
  background-color: yellow;
}
.app {
  padding: 0px;
  font-family: 'Segoe UI';
}
.widget {
  position: relative;
  border: 1px solid lightgray;
}
.svg {
  border: 1px solid lightgrey;
}

.numberContainer {
  position: absolute;
  top: 0px; 
  left: 0px;
  display: flex;
  flex-direction: column;
}

.geometrical {
   justify-content: flex-end;
}
.cultivated {
   justify-content: flex-end;
}

.cultivated div {
  text-align: right;
}

.offical {
   justify-content: flex-start;
}
.offical div {
  text-align: right;
}

</style>
