<template>

  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
 <h>后台管理系统</h>
    <el-menu-item  v-for="item in noChildren" :index="item.path" :key="item.path" :active-text-color = "yellow" :text-color="white">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,subIndex) in item.children"  :key="subItem.path">
      <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
        <!-- <span slot="title">{{item.children.label}}</span> -->
      </el-menu-item-group>
      </el-submenu>

    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          name: "engineerManage",
          path: "/",
          url: "",
          label: "工程管理",
          icon: "menu",
        },
        {
          name: "movieManage",
          path: "/movieManage",
          url: "",
          label: "视频管理",
          icon: "video-camera",
          children: [
            {
              name: "importReview",
              path: "/importReview",
              url: "",
              label: "视频导入和判读",
            },
            {
              name: "reviewInquire",
              path: "/reviewInquire",
              url: "",
              label: "判读查询",
            },
          ],
        },
        {
          name: "engineerReport",
          path: "/engineerReport",
          url: "",
          label: "工程报告",
          icon: "document-copy",
        },
        {
          name: "dataManage",
          path: "/dataManage",
          url: "",
          label: "数据管理",
          icon: "files",
          children: [
            {
              name: "dataImport",
              path: "/dataImport",
              url: "",
              label: "数据导入",
            },
          ],
        },
        {
          name: "systemSetting",
          path: "/systemSetting",
          url: "",
          label: "系统设置",
          icon: "setting",
          children: [
            {
              name: "institutionMessage",
              path: "/institutionMessage",
              url: "",
              label: "机构信息设置",
            },
            {
              name: "businessManage",
              path: "/businessManage",
              url: "",
              label: "业务选项管理",
            },
            {
              name: "templateManage",
              path: "/templateManage",
              url: "",
              label: "报告模板管理",
            },
          ],
        },
        {
          name: "peopleManage",
          path: "/peopleManage",
          url: "",
          label: "用户管理",
          icon: "user",
          children: [
            {
              name: "roleManage",
              path: "/roleManage",
              url: "",
              label: "角色管理",
            },
            {
              name: "authorization",
              path: "/authorization",
              url: "",
              label: "用户及授权管理",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    noChildren() {
      return this.menu.filter((item) => !item.children);
      console.log(item);
    },
  },
};
</script>

<style lang="less" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
 
}
.el-menu {
  background-color: rgb(84, 92, 101);
  height: 100vh; 
}

</style>
