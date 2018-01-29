Vue.component('zone-selector-component', {
  props: ['zones'],
  template: '<div class="zonebox"><h3>Zones</h3><div v-for="zone in zones"><label class="context-menu--select--label">{{zone.label}}:<select class="context-menu--select--select" v-model="zone.value" @change="changeZone"><option v-for="choice in zone.choices" v-bind:value="choice.code">{{ choice.name }}</option></select></label></div></div>',
  methods: {
    changeZone: function () {
      this.$emit('zone', this.zones);
    }
  },
});