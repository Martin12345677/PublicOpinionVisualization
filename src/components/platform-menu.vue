<template>
  <div class="common_menu">
    <div class="menu_user">

    </div>
    <div class="menu_project">
      <div class="project_title">
        菜单
      </div>
      <div class="project_container">
        <div
          v-for="(pro, idx) in projects"
          :key="idx"
          class="project_part"
        >
          <div
            :class="{current_project: curProIdx === idx}"
            @click="changePro(idx)"
          >
            <icon name="text" />
            <div class="project_name">
              {{ pro.name }}
            </div>
            <icon
              v-if="pro.children && pro.children.length > 0"
              name="arrow_down"
            />
          </div>
          <div
            v-show="curProIdx === idx"
            class="sub_pro_part"
          >
            <div
              v-for="(subPro, subIdx) in pro.children"
              :key="subIdx"
              class="sub_pro_item"
              :class="{cur_sub_pro: curSubProIdx === subIdx}"
              @click="changeSubPro(subIdx)"
            > {{ subPro.name }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { menu } from '../utils/menu';
import icon from '../components/icon';
import '../assets/svg/text.svg';
import '../assets/svg/arrow_down.svg';

function useProject() {
  const projects = ref(menu);
  const curProIdx = ref(-1);
  const curSubProIdx = ref(-1);
  watch(curProIdx, () => {
    curSubProIdx.value = -1;
  });

  return {
    projects,
    curProIdx,
    curSubProIdx,
    changePro(idx) {
      curProIdx.value = idx;
    },
    changeSubPro(idx) {
      curSubProIdx.value = idx;
    },
  };
}

export default defineComponent({
  components: {
    icon,
  },
  setup() {
    return {
      ...useProject(),
    };
  },
});
</script>

<style lang="scss">
.common_menu {

}
</style>
