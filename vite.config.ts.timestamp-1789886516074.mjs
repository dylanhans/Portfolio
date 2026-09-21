// vite.config.ts
import { sveltekit } from "file:///Users/dylanhans/Library/Mobile%20Documents/com%7Eapple%7ECloudDocs/Documents/dylan_portfolio/dport/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import pluginYaml from "file:///Users/dylanhans/Library/Mobile%20Documents/com%7Eapple%7ECloudDocs/Documents/dylan_portfolio/dport/node_modules/@rollup/plugin-yaml/dist/es/index.js";
import yaml from "file:///Users/dylanhans/Library/Mobile%20Documents/com%7Eapple%7ECloudDocs/Documents/dylan_portfolio/dport/node_modules/js-yaml/dist/js-yaml.mjs";
import { dataToEsm } from "file:///Users/dylanhans/Library/Mobile%20Documents/com%7Eapple%7ECloudDocs/Documents/dylan_portfolio/dport/node_modules/@rollup/pluginutils/dist/es/index.js";
function markdown() {
  return {
    name: "markdown",
    transform(src, id) {
      if (/\.md$/.test(id)) {
        let frontmatter = {};
        let content = src;
        if (src.startsWith("---")) {
          const end = src.indexOf("---", 3);
          if (end === -1) {
            throw new Error(`Unclosed TOML frontmatter in ${id}`);
          }
          frontmatter = yaml.load(src.substring(3, end).trim());
          content = src.substring(end + 3).trim();
        }
        return {
          code: dataToEsm({ ...frontmatter, content }),
          map: null
        };
      }
    }
  };
}
var config = {
  plugins: [sveltekit(), pluginYaml(), markdown()]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZHlsYW5oYW5zL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0RvY3VtZW50cy9keWxhbl9wb3J0Zm9saW8vZHBvcnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9keWxhbmhhbnMvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvRG9jdW1lbnRzL2R5bGFuX3BvcnRmb2xpby9kcG9ydC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZHlsYW5oYW5zL0xpYnJhcnkvTW9iaWxlJTIwRG9jdW1lbnRzL2NvbSU3RWFwcGxlJTdFQ2xvdWREb2NzL0RvY3VtZW50cy9keWxhbl9wb3J0Zm9saW8vZHBvcnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tIFwiQHN2ZWx0ZWpzL2tpdC92aXRlXCI7XG5pbXBvcnQgcGx1Z2luWWFtbCBmcm9tIFwiQHJvbGx1cC9wbHVnaW4teWFtbFwiO1xuaW1wb3J0IHlhbWwgZnJvbSBcImpzLXlhbWxcIjtcbmltcG9ydCB7IGRhdGFUb0VzbSB9IGZyb20gXCJAcm9sbHVwL3BsdWdpbnV0aWxzXCI7XG5pbXBvcnQgdHlwZSB7IFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG4vKiogQSBjdXN0b20gTWFya2Rvd24gcGx1Z2luIGZvciBWaXRlLCB3aXRoIFRPTUwgZnJvbnRtYXR0ZXIgc3VwcG9ydC4gKi9cbmZ1bmN0aW9uIG1hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwibWFya2Rvd25cIixcblxuICAgIHRyYW5zZm9ybShzcmM6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgaWYgKC9cXC5tZCQvLnRlc3QoaWQpKSB7XG4gICAgICAgIGxldCBmcm9udG1hdHRlciA9IHt9O1xuICAgICAgICBsZXQgY29udGVudCA9IHNyYztcbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKFwiLS0tXCIpKSB7XG4gICAgICAgICAgY29uc3QgZW5kID0gc3JjLmluZGV4T2YoXCItLS1cIiwgMyk7XG4gICAgICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5jbG9zZWQgVE9NTCBmcm9udG1hdHRlciBpbiAke2lkfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmcm9udG1hdHRlciA9IHlhbWwubG9hZChzcmMuc3Vic3RyaW5nKDMsIGVuZCkudHJpbSgpKSBhcyBhbnk7XG4gICAgICAgICAgY29udGVudCA9IHNyYy5zdWJzdHJpbmcoZW5kICsgMykudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29kZTogZGF0YVRvRXNtKHsgLi4uZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfSksXG4gICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IGNvbmZpZzogVXNlckNvbmZpZyA9IHtcbiAgcGx1Z2luczogW3N2ZWx0ZWtpdCgpLCBwbHVnaW5ZYW1sKCkgYXMgYW55LCBtYXJrZG93bigpXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK2MsU0FBUyxpQkFBaUI7QUFDemUsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsaUJBQWlCO0FBSTFCLFNBQVMsV0FBVztBQUNsQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFFTixVQUFVLEtBQWEsSUFBWTtBQUNqQyxVQUFJLFFBQVEsS0FBSyxFQUFFLEdBQUc7QUFDcEIsWUFBSSxjQUFjLENBQUM7QUFDbkIsWUFBSSxVQUFVO0FBQ2QsWUFBSSxJQUFJLFdBQVcsS0FBSyxHQUFHO0FBQ3pCLGdCQUFNLE1BQU0sSUFBSSxRQUFRLE9BQU8sQ0FBQztBQUNoQyxjQUFJLFFBQVEsSUFBSTtBQUNkLGtCQUFNLElBQUksTUFBTSxnQ0FBZ0MsSUFBSTtBQUFBLFVBQ3REO0FBQ0Esd0JBQWMsS0FBSyxLQUFLLElBQUksVUFBVSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUM7QUFDcEQsb0JBQVUsSUFBSSxVQUFVLE1BQU0sQ0FBQyxFQUFFLEtBQUs7QUFBQSxRQUN4QztBQUNBLGVBQU87QUFBQSxVQUNMLE1BQU0sVUFBVSxFQUFFLEdBQUcsYUFBYSxRQUFRLENBQUM7QUFBQSxVQUMzQyxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTSxTQUFxQjtBQUFBLEVBQ3pCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxHQUFVLFNBQVMsQ0FBQztBQUN4RDtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
