<template>
  <div class="common_menu">
    <div class="menu_user">

    </div>
    <div class="menu_project">
      <div class="project_title">
        导航
      </div>
      <div class="project_container">
        <div
          v-for="(pro, idx) in projects"
          :key="idx"
          class="project_part"
        >
          <div
            :class="{current_project: curProIdx === idx}"
            class="project_item"
            @click="changePro(idx)"
          >
            <icon name="text" height="16" width="16" />
            <div class="project_name" :title="pro.name">
              {{ pro.name.length > 9 ? `${pro.name.slice(0, 8)}...` : pro.name }}
            </div>
            <icon
              v-if="pro.children && pro.children.length > 0"
              name="arrow_down"
              height="16"
              width="16" 
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
import '../assets/svg/text.svg?sprite';
import '../assets/svg/arrow_down.svg?sprite';

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
      if (idx === curProIdx.value) {
        curProIdx.value = -1;
        return;
      }
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
  background-color: #fff;
  position: fixed;
  width: 240px;
  height: 100%;
  top: 0;
  z-index: 10;
  box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
  transition: .2s ease-in;
  overflow-y: auto;
  padding-top: 70px;
  user-select: none;
}
.menu_project {
  line-height: 30px;
}
.project_title {
  color: #a6b7bf;
  font-size: 12px;
  font-weight: 500;
  padding: 14px 14px 14px 20px;
}
.project_container {
  .project_item {
    margin-bottom: 5px;
    cursor: pointer;
    color: #687384;
    padding: 15px 15px;
    display: flex;
    border-radius: 4px;
    white-space: nowrap;
    align-items: center;
    position: relative;
    line-height: 14px;
    .svg_text {
      margin: 0 8px 0 5px;
      vertical-align: middle;
    }
    .project_name {
      margin-left: 4px;
    }
    .svg_arrow_down {
      position: absolute;
      top: 14px;
      right: 15px;
      margin-left: 10px;
      transform: rotate(-90deg);
      transition: all .3s ease-out;
    }
    &:hover {
      color: #186dde;
    }
  }
  .current_project {
    color: #186dde;
    font-weight: 500;
    .svg_arrow_down {
      transform: rotate(0deg);
    }
  }

  .sub_pro_part {
    padding-left: 33px;
    background: #fff;
  }
  .sub_pro_item {
    padding: 7px 35px 7px 15px;
    font-size: 14px;
    line-height: 25px;
    cursor: pointer;

    &:hover {
      color: #186dde;
    }
  }
  .cur_sub_pro {
    color: #186dde;
    font-weight: 500;
  }
}
</style>
