<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition"
         :class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close"
                  @click="closeModel">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay"
         v-show="mdShow"
         @click="closeModel"></div>
  </div>
</template>

<script>
export default {
  name: 'model',
  props: {
    mdShow: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModel () {
      this.$emit('close');
    }
  }
};
</script>

<style></style>
