<template>
  <div class="containment-class">
      <div class="main-view">
          <div class="top-bar">
              <div class="number">
                  ARTIFACT #<strong>{{ baneid }}</strong>
              </div>
              <div class="separators">
                  <div class="separator"></div>
                  <div class="separator"></div>
              </div>
              <div class="restriction">
                  <div class="level">LEVEL {{ securityLevel }}</div>
                  <div class="text">{{ getSecurityType(securityLevel).toUpperCase() }}</div>
              </div>
          </div>
          <div class="bottom-bar" :class="getSize()">
              <div class="containment" :class="containment">
                  <div class="text">
                      <div class="label">CONTAINMENT CLASS:</div>
                      <div class="class">{{ containment.toUpperCase() }}</div>
                  </div>
                  <div class="icon"><i :class="getIconClass(containment)"></i></div>
              </div>
              <div></div>
              <div class="other">
                  <div class="disruption" :class="disruption">
                      <div class="text">
                          <div class="label">DISRUPTION CLASS:</div>
                          <div class="class">{{ disruption.toUpperCase() }}</div>
                      </div>
                      <div class="icon"><i :class="getIconClass(disruption)"></i></div>
                  </div>
                  <div class="risk" :class="risk">
                      <div class="text">
                          <div class="label">RISK CLASS:</div>
                          <div class="class">{{ risk.toUpperCase() }}</div>
                      </div>
                      <div class="icon"><i :class="getIconClass(risk)"></i></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="quick-view">
          <div class="top none">
              <div class="diamond">
                  <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
              </div>
              <div class="icon"><i :class="getIconClass(securityLevel)"></i></div>
          </div>
          <div class="middle">
              <div class="left"  :class="containment">
                  <div class="diamond">
                      <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
                  </div>
                  <div class="icon"><i :class="getIconClass(containment)"></i></div>
              </div>
              <div class="right" :class="disruption">
                  <div class="diamond">
                      <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
                  </div>
                  <div class="icon"><i :class="getIconClass(disruption)"></i></div>
              </div>
          </div>
          <div class="bottom" :class="risk">
              <div class="diamond">
                  <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
              </div>
              <div class="icon"><i :class="getIconClass(risk)"></i></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  el: "#component-header",
  data() {
    return {
      width: null,
    }
  },
  props: ["baneid", "containment", "disruption", "risk", "securityLevel"],
  mounted() {
    window.addEventListener("resize", this.screenWidth);
    this.screenWidth()
  },
  destroyed() {
    const window = window ? window : null;

    if (!window) return;

    window.removeEventListener("resize", this.screenWidth);
  },
  methods: {
    getIconClass(iconName) {
      switch(iconName) {
        case "tarrasque": return "fas fa-globe";
        case "unknown": return "fas fa-question";
        case "uncontained": return "fas fa-arrows-up-down-left-right";
        case "safe":
        case "material": return "fas fa-shield-halved";
        case "tower": return "fas fa-gopuram";
        case "kobold": return "fas fa-mountain";
        case "aboleth": return "fas fa-eye";
        case "neutralized": return "fas fa-ban";
        case "dimension": return "fas fa-infinity";
        case "caution": return "fas fa-triangle-exclamation";
        case "danger": return "fas fa-skull";
        case "critical": return "fas fa-biohazard";
        case "0": return "fas fa-0";
        case "1": return "fas fa-1";
        case "2": return "fas fa-2";
        case "3": return "fas fa-3";
        case "4": return "fas fa-4";
        case "5": return "fas fa-5";
        default: return "fas fa-book";
      }
    },
    getSecurityType(securityLevel) {
      switch(securityLevel) {
        case "0": return "public";
        case "1": return "unrestricted";
        case "2": return "restricted";
        case "3": return "top secret";
        case "4": return "hydra";
        case "5": return "pyramid";
      }
    },
    getSize() {
      if(this.width < 420) return "xs";
      if(this.width < 585) return "sm";
      return "md";
    },
    screenWidth() {
      this.width = this.$el.offsetWidth
    },
  }
}
</script>