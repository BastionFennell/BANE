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
          <div class="bottom-bar">
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
          <div class="top" :class="containment">
              <div class="diamond">
                  <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
              </div>
              <div class="icon"><i :class="getIconClass(containment)"></i></div>
          </div>
          <div class="middle">
              <div class="left" :class="disruption">
                  <div class="diamond">
                      <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
                  </div>
                  <div class="icon"><i :class="getIconClass(disruption)"></i></div>
              </div>
              <div class="right" :class="risk">
                  <div class="diamond">
                      <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
                  </div>
                  <div class="icon"><i :class="getIconClass(risk)"></i></div>
              </div>
          </div>
          <div class="bottom">
              <div class="diamond none">
                  <svg stroke="black" width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650"><g><path id="svg_2" d="m25.30386,325.00001l299.98623,-299.9863l299.40604,299.9863l-299.40604,299.98629l-299.98623,-299.98629z" fill="currentColor" /></g></svg>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["baneid", "containment", "disruption", "risk", "securityLevel"],
  methods: {
    getIconClass(iconName) {
      switch(iconName) {
        case "tarrasque": return "fas fa-biohazard";
        case "unknown": return "fas fa-question";
        case "uncontained": return "fas fa-arrows-up-down-left-right";
        case "safe":
        case "material": return "fas fa-shield-halved";
        case "tower": return "fas fa-gopuram";
        case "kobold": return "fas fa-mountain";
        case "aboleth": return "fas fa-eye";
        case "neutralized": return "fas fa-ban";
        case "caution": return "fas fa-triangle-exclamation";
        case "critical": return "fas fa-skull";
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
    }
  }
}
</script>