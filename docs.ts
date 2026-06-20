
const docsSetup: { subs: Sub[] } = {
  "subs": [
    {
      "name": "Guppy",
      "yearsActive": "2026",
      "logo": "guppy-docs-logo.png",
      "sections": [
        {
          "name": "Mechanical",
          "type": "internal",
          "path": "docs-root/guppy/mechanical"
        },
        {
          "name": "Electrical",
          "type": "internal",
          "path": "docs-root/guppy/electrical"
        },
        {
          "name": "ROS",
          "type": "ros_ws",
          "owner": "PalouseRobosub",
          "repo": "guppy",
          "path": "/src"
        }
      ]
    },
    {
      "name": "Cobalt",
      "yearsActive": "2021",
      "logo": "wsu-logo.svg",
      "sections": []
    }
  ]
}

export default docsSetup;