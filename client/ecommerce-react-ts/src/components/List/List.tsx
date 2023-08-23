import Card from "../Card/Card"
import styles from "./List.module.css"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import { PreProduct } from "../../types"

const categories_data = [
  {
    id: 3,
    attributes: {
      title: "Accesorie",
      createdAt: "2023-08-13T21:18:06.041Z",
      updatedAt: "2023-08-13T21:36:41.389Z",
      publishedAt: "2023-08-13T21:32:28.708Z",
    },
  },
  {
    id: 2,
    attributes: {
      title: "Hoodies",
      createdAt: "2023-08-13T21:17:49.253Z",
      updatedAt: "2023-08-13T21:36:47.554Z",
      publishedAt: "2023-08-13T21:32:28.708Z",
    },
  },
  {
    id: 1,
    attributes: {
      title: "T-Shirt",
      createdAt: "2023-08-13T21:17:42.587Z",
      updatedAt: "2023-08-13T21:36:51.826Z",
      publishedAt: "2023-08-13T21:32:28.708Z",
    },
  },
]

const data = [
  {
    id: 2,
    attributes: {
      title: "Hoodie Harlem",
      desc: "Hoodie harlem oversize",
      price: 50,
      isNew: true,
      type: "featured",
      createdAt: "2023-08-13T21:19:06.561Z",
      updatedAt: "2023-08-13T21:19:06.561Z",
      publishedAt: "2023-08-13T21:32:22.674Z",
      img: {
        data: {
          id: 8,
          attributes: {
            name: "buzo3.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo3_03c5452ac1.webp",
                hash: "small_buzo3_03c5452ac1",
                mime: "image/webp",
                name: "small_buzo3.webp",
                path: null,
                size: 5.04,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo3_03c5452ac1.webp",
                hash: "thumbnail_buzo3_03c5452ac1",
                mime: "image/webp",
                name: "thumbnail_buzo3.webp",
                path: null,
                size: 1.26,
                width: 156,
                height: 156,
              },
            },
            hash: "buzo3_03c5452ac1",
            ext: ".webp",
            mime: "image/webp",
            size: 7.7,
            url: "/uploads/buzo3_03c5452ac1.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.639Z",
            updatedAt: "2023-08-13T21:15:45.639Z",
          },
        },
      },
      img2: {
        data: {
          id: 7,
          attributes: {
            name: "buzo3.3.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 800,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo3_3_9b063367d2.webp",
                hash: "small_buzo3_3_9b063367d2",
                mime: "image/webp",
                name: "small_buzo3.3.webp",
                path: null,
                size: 6.34,
                width: 400,
                height: 500,
              },
              medium: {
                ext: ".webp",
                url: "/uploads/medium_buzo3_3_9b063367d2.webp",
                hash: "medium_buzo3_3_9b063367d2",
                mime: "image/webp",
                name: "medium_buzo3.3.webp",
                path: null,
                size: 9.96,
                width: 600,
                height: 750,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo3_3_9b063367d2.webp",
                hash: "thumbnail_buzo3_3_9b063367d2",
                mime: "image/webp",
                name: "thumbnail_buzo3.3.webp",
                path: null,
                size: 1.55,
                width: 125,
                height: 156,
              },
            },
            hash: "buzo3_3_9b063367d2",
            ext: ".webp",
            mime: "image/webp",
            size: 10.62,
            url: "/uploads/buzo3_3_9b063367d2.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.540Z",
            updatedAt: "2023-08-13T21:15:45.540Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "men",
              desc: "Men clothes",
              createdAt: "2023-08-13T21:16:00.587Z",
              updatedAt: "2023-08-13T21:16:00.587Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
          {
            id: 2,
            attributes: {
              title: "Women",
              desc: "women clothes",
              createdAt: "2023-08-13T21:16:15.739Z",
              updatedAt: "2023-08-13T21:16:15.739Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 2,
            attributes: {
              title: "Hoodies",
              createdAt: "2023-08-13T21:17:49.253Z",
              updatedAt: "2023-08-13T21:36:47.554Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 3,
    attributes: {
      title: "Hat war",
      desc: "Hat war new era",
      price: 15,
      isNew: false,
      type: "trending",
      createdAt: "2023-08-13T21:19:52.859Z",
      updatedAt: "2023-08-13T21:19:52.859Z",
      publishedAt: "2023-08-13T21:32:22.674Z",
      img: {
        data: {
          id: 10,
          attributes: {
            name: "gorra1.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_gorra1_c8ef5565b4.webp",
                hash: "small_gorra1_c8ef5565b4",
                mime: "image/webp",
                name: "small_gorra1.webp",
                path: null,
                size: 7.29,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_gorra1_c8ef5565b4.webp",
                hash: "thumbnail_gorra1_c8ef5565b4",
                mime: "image/webp",
                name: "thumbnail_gorra1.webp",
                path: null,
                size: 1.55,
                width: 156,
                height: 156,
              },
            },
            hash: "gorra1_c8ef5565b4",
            ext: ".webp",
            mime: "image/webp",
            size: 12.13,
            url: "/uploads/gorra1_c8ef5565b4.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.707Z",
            updatedAt: "2023-08-13T21:15:45.707Z",
          },
        },
      },
      img2: {
        data: {
          id: 9,
          attributes: {
            name: "gorra1.1.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_gorra1_1_09f3155055.webp",
                hash: "small_gorra1_1_09f3155055",
                mime: "image/webp",
                name: "small_gorra1.1.webp",
                path: null,
                size: 12.31,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_gorra1_1_09f3155055.webp",
                hash: "thumbnail_gorra1_1_09f3155055",
                mime: "image/webp",
                name: "thumbnail_gorra1.1.webp",
                path: null,
                size: 1.61,
                width: 156,
                height: 156,
              },
            },
            hash: "gorra1_1_09f3155055",
            ext: ".webp",
            mime: "image/webp",
            size: 21.78,
            url: "/uploads/gorra1_1_09f3155055.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.671Z",
            updatedAt: "2023-08-13T21:15:45.671Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "men",
              desc: "Men clothes",
              createdAt: "2023-08-13T21:16:00.587Z",
              updatedAt: "2023-08-13T21:16:00.587Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
          {
            id: 2,
            attributes: {
              title: "Women",
              desc: "women clothes",
              createdAt: "2023-08-13T21:16:15.739Z",
              updatedAt: "2023-08-13T21:16:15.739Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 3,
            attributes: {
              title: "Accesorie",
              createdAt: "2023-08-13T21:18:06.041Z",
              updatedAt: "2023-08-13T21:36:41.389Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 4,
    attributes: {
      title: "T-Shirt Bronx",
      desc: "T-Shirt Bronx overzie",
      price: 20,
      isNew: false,
      type: "normal",
      createdAt: "2023-08-13T21:33:09.861Z",
      updatedAt: "2023-08-13T21:33:10.901Z",
      publishedAt: "2023-08-13T21:33:10.897Z",
      img: {
        data: {
          id: 15,
          attributes: {
            name: "remera2.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_remera2_f1d5698e43.webp",
                hash: "small_remera2_f1d5698e43",
                mime: "image/webp",
                name: "small_remera2.webp",
                path: null,
                size: 6.11,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_remera2_f1d5698e43.webp",
                hash: "thumbnail_remera2_f1d5698e43",
                mime: "image/webp",
                name: "thumbnail_remera2.webp",
                path: null,
                size: 1.31,
                width: 156,
                height: 156,
              },
            },
            hash: "remera2_f1d5698e43",
            ext: ".webp",
            mime: "image/webp",
            size: 9.24,
            url: "/uploads/remera2_f1d5698e43.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.875Z",
            updatedAt: "2023-08-13T21:15:45.875Z",
          },
        },
      },
      img2: {
        data: {
          id: 14,
          attributes: {
            name: "remera2.2.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_remera2_2_5ea753b583.webp",
                hash: "small_remera2_2_5ea753b583",
                mime: "image/webp",
                name: "small_remera2.2.webp",
                path: null,
                size: 6.37,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_remera2_2_5ea753b583.webp",
                hash: "thumbnail_remera2_2_5ea753b583",
                mime: "image/webp",
                name: "thumbnail_remera2.2.webp",
                path: null,
                size: 1.66,
                width: 156,
                height: 156,
              },
            },
            hash: "remera2_2_5ea753b583",
            ext: ".webp",
            mime: "image/webp",
            size: 9.13,
            url: "/uploads/remera2_2_5ea753b583.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.847Z",
            updatedAt: "2023-08-13T21:15:45.847Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "men",
              desc: "Men clothes",
              createdAt: "2023-08-13T21:16:00.587Z",
              updatedAt: "2023-08-13T21:16:00.587Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
          {
            id: 2,
            attributes: {
              title: "Women",
              desc: "women clothes",
              createdAt: "2023-08-13T21:16:15.739Z",
              updatedAt: "2023-08-13T21:16:15.739Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "T-Shirt",
              createdAt: "2023-08-13T21:17:42.587Z",
              updatedAt: "2023-08-13T21:36:51.826Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 6,
    attributes: {
      title: "Hoodie worm",
      desc: "Hoodie worm oversize",
      price: 35,
      isNew: true,
      type: "trending",
      createdAt: "2023-08-13T21:34:37.076Z",
      updatedAt: "2023-08-13T21:34:38.178Z",
      publishedAt: "2023-08-13T21:34:38.176Z",
      img: {
        data: {
          id: 4,
          attributes: {
            name: "buzo1.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo1_a0f04d5659.webp",
                hash: "small_buzo1_a0f04d5659",
                mime: "image/webp",
                name: "small_buzo1.webp",
                path: null,
                size: 5.98,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo1_a0f04d5659.webp",
                hash: "thumbnail_buzo1_a0f04d5659",
                mime: "image/webp",
                name: "thumbnail_buzo1.webp",
                path: null,
                size: 1.51,
                width: 156,
                height: 156,
              },
            },
            hash: "buzo1_a0f04d5659",
            ext: ".webp",
            mime: "image/webp",
            size: 8.97,
            url: "/uploads/buzo1_a0f04d5659.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.465Z",
            updatedAt: "2023-08-13T21:15:45.465Z",
          },
        },
      },
      img2: {
        data: {
          id: 5,
          attributes: {
            name: "buzo1.1}.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo1_1_708403d71e.webp",
                hash: "small_buzo1_1_708403d71e",
                mime: "image/webp",
                name: "small_buzo1.1}.webp",
                path: null,
                size: 5.03,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo1_1_708403d71e.webp",
                hash: "thumbnail_buzo1_1_708403d71e",
                mime: "image/webp",
                name: "thumbnail_buzo1.1}.webp",
                path: null,
                size: 1.3,
                width: 156,
                height: 156,
              },
            },
            hash: "buzo1_1_708403d71e",
            ext: ".webp",
            mime: "image/webp",
            size: 7.44,
            url: "/uploads/buzo1_1_708403d71e.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.510Z",
            updatedAt: "2023-08-13T21:15:45.510Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "men",
              desc: "Men clothes",
              createdAt: "2023-08-13T21:16:00.587Z",
              updatedAt: "2023-08-13T21:16:00.587Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
          {
            id: 2,
            attributes: {
              title: "Women",
              desc: "women clothes",
              createdAt: "2023-08-13T21:16:15.739Z",
              updatedAt: "2023-08-13T21:16:15.739Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 2,
            attributes: {
              title: "Hoodies",
              createdAt: "2023-08-13T21:17:49.253Z",
              updatedAt: "2023-08-13T21:36:47.554Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 7,
    attributes: {
      title: "T-Shirt poker",
      desc: "T-Shirt poker oversize",
      price: 25,
      isNew: true,
      type: "trending",
      createdAt: "2023-08-13T21:35:16.579Z",
      updatedAt: "2023-08-13T21:35:17.115Z",
      publishedAt: "2023-08-13T21:35:17.113Z",
      img: {
        data: {
          id: 2,
          attributes: {
            name: "remera3.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_remera3_4e4d484170.webp",
                hash: "small_remera3_4e4d484170",
                mime: "image/webp",
                name: "small_remera3.webp",
                path: null,
                size: 5.48,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_remera3_4e4d484170.webp",
                hash: "thumbnail_remera3_4e4d484170",
                mime: "image/webp",
                name: "thumbnail_remera3.webp",
                path: null,
                size: 1.23,
                width: 156,
                height: 156,
              },
            },
            hash: "remera3_4e4d484170",
            ext: ".webp",
            mime: "image/webp",
            size: 8.38,
            url: "/uploads/remera3_4e4d484170.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.288Z",
            updatedAt: "2023-08-13T21:15:45.288Z",
          },
        },
      },
      img2: {
        data: {
          id: 1,
          attributes: {
            name: "remera3.3.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_remera3_3_719c9cc09c.webp",
                hash: "small_remera3_3_719c9cc09c",
                mime: "image/webp",
                name: "small_remera3.3.webp",
                path: null,
                size: 5.83,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_remera3_3_719c9cc09c.webp",
                hash: "thumbnail_remera3_3_719c9cc09c",
                mime: "image/webp",
                name: "thumbnail_remera3.3.webp",
                path: null,
                size: 1.53,
                width: 156,
                height: 156,
              },
            },
            hash: "remera3_3_719c9cc09c",
            ext: ".webp",
            mime: "image/webp",
            size: 8.4,
            url: "/uploads/remera3_3_719c9cc09c.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.167Z",
            updatedAt: "2023-08-13T21:15:45.167Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 2,
            attributes: {
              title: "Women",
              desc: "women clothes",
              createdAt: "2023-08-13T21:16:15.739Z",
              updatedAt: "2023-08-13T21:16:15.739Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "T-Shirt",
              createdAt: "2023-08-13T21:17:42.587Z",
              updatedAt: "2023-08-13T21:36:51.826Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 1,
    attributes: {
      title: "T-Shirt Jordan",
      desc: "Jordan T-Shirt oversize",
      price: 15,
      isNew: false,
      type: "normal",
      createdAt: "2023-08-13T21:17:28.950Z",
      updatedAt: "2023-08-13T21:18:20.669Z",
      publishedAt: "2023-08-13T21:32:22.674Z",
      img: {
        data: {
          id: 13,
          attributes: {
            name: "remera_1.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_remera_1_9738bf3119.webp",
                hash: "small_remera_1_9738bf3119",
                mime: "image/webp",
                name: "small_remera_1.webp",
                path: null,
                size: 6.26,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_remera_1_9738bf3119.webp",
                hash: "thumbnail_remera_1_9738bf3119",
                mime: "image/webp",
                name: "thumbnail_remera_1.webp",
                path: null,
                size: 1.46,
                width: 156,
                height: 156,
              },
            },
            hash: "remera_1_9738bf3119",
            ext: ".webp",
            mime: "image/webp",
            size: 9.62,
            url: "/uploads/remera_1_9738bf3119.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.838Z",
            updatedAt: "2023-08-13T21:15:45.838Z",
          },
        },
      },
      img2: {
        data: {
          id: 11,
          attributes: {
            name: "remera_1.2.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_remera_1_2_7c55d16c8f.webp",
                hash: "small_remera_1_2_7c55d16c8f",
                mime: "image/webp",
                name: "small_remera_1.2.webp",
                path: null,
                size: 6.2,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_remera_1_2_7c55d16c8f.webp",
                hash: "thumbnail_remera_1_2_7c55d16c8f",
                mime: "image/webp",
                name: "thumbnail_remera_1.2.webp",
                path: null,
                size: 1.62,
                width: 156,
                height: 156,
              },
            },
            hash: "remera_1_2_7c55d16c8f",
            ext: ".webp",
            mime: "image/webp",
            size: 9.36,
            url: "/uploads/remera_1_2_7c55d16c8f.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.767Z",
            updatedAt: "2023-08-13T21:15:45.767Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "men",
              desc: "Men clothes",
              createdAt: "2023-08-13T21:16:00.587Z",
              updatedAt: "2023-08-13T21:16:00.587Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "T-Shirt",
              createdAt: "2023-08-13T21:17:42.587Z",
              updatedAt: "2023-08-13T21:36:51.826Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 5,
    attributes: {
      title: "Hoodie Lebron",
      desc: "Hoodie Lebron oversize",
      price: 40,
      isNew: false,
      type: "featured",
      createdAt: "2023-08-13T21:33:53.540Z",
      updatedAt: "2023-08-13T21:33:54.384Z",
      publishedAt: "2023-08-13T21:33:54.381Z",
      img: {
        data: {
          id: 3,
          attributes: {
            name: "buzo2.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo2_74cfe7230c.webp",
                hash: "small_buzo2_74cfe7230c",
                mime: "image/webp",
                name: "small_buzo2.webp",
                path: null,
                size: 4.55,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo2_74cfe7230c.webp",
                hash: "thumbnail_buzo2_74cfe7230c",
                mime: "image/webp",
                name: "thumbnail_buzo2.webp",
                path: null,
                size: 1.22,
                width: 156,
                height: 156,
              },
            },
            hash: "buzo2_74cfe7230c",
            ext: ".webp",
            mime: "image/webp",
            size: 6.48,
            url: "/uploads/buzo2_74cfe7230c.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.449Z",
            updatedAt: "2023-08-13T21:15:45.449Z",
          },
        },
      },
      img2: {
        data: {
          id: 6,
          attributes: {
            name: "buzo2.2.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo2_2_f17ee28cb2.webp",
                hash: "small_buzo2_2_f17ee28cb2",
                mime: "image/webp",
                name: "small_buzo2.2.webp",
                path: null,
                size: 14.05,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo2_2_f17ee28cb2.webp",
                hash: "thumbnail_buzo2_2_f17ee28cb2",
                mime: "image/webp",
                name: "thumbnail_buzo2.2.webp",
                path: null,
                size: 2.14,
                width: 156,
                height: 156,
              },
            },
            hash: "buzo2_2_f17ee28cb2",
            ext: ".webp",
            mime: "image/webp",
            size: 25.05,
            url: "/uploads/buzo2_2_f17ee28cb2.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.516Z",
            updatedAt: "2023-08-13T21:15:45.516Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "men",
              desc: "Men clothes",
              createdAt: "2023-08-13T21:16:00.587Z",
              updatedAt: "2023-08-13T21:16:00.587Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 2,
            attributes: {
              title: "Hoodies",
              createdAt: "2023-08-13T21:17:49.253Z",
              updatedAt: "2023-08-13T21:36:47.554Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
  {
    id: 6,
    attributes: {
      title: "Hoodie worm",
      desc: "Hoodie worm oversize",
      price: 35,
      isNew: true,
      type: "trending",
      createdAt: "2023-08-13T21:34:37.076Z",
      updatedAt: "2023-08-13T21:34:38.178Z",
      publishedAt: "2023-08-13T21:34:38.176Z",
      img: {
        data: {
          id: 4,
          attributes: {
            name: "buzo1.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo1_a0f04d5659.webp",
                hash: "small_buzo1_a0f04d5659",
                mime: "image/webp",
                name: "small_buzo1.webp",
                path: null,
                size: 5.98,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo1_a0f04d5659.webp",
                hash: "thumbnail_buzo1_a0f04d5659",
                mime: "image/webp",
                name: "thumbnail_buzo1.webp",
                path: null,
                size: 1.51,
                width: 156,
                height: 156,
              },
            },
            hash: "buzo1_a0f04d5659",
            ext: ".webp",
            mime: "image/webp",
            size: 8.97,
            url: "/uploads/buzo1_a0f04d5659.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.465Z",
            updatedAt: "2023-08-13T21:15:45.465Z",
          },
        },
      },
      img2: {
        data: {
          id: 5,
          attributes: {
            name: "buzo1.1}.webp",
            alternativeText: null,
            caption: null,
            width: 640,
            height: 640,
            formats: {
              small: {
                ext: ".webp",
                url: "/uploads/small_buzo1_1_708403d71e.webp",
                hash: "small_buzo1_1_708403d71e",
                mime: "image/webp",
                name: "small_buzo1.1}.webp",
                path: null,
                size: 5.03,
                width: 500,
                height: 500,
              },
              thumbnail: {
                ext: ".webp",
                url: "/uploads/thumbnail_buzo1_1_708403d71e.webp",
                hash: "thumbnail_buzo1_1_708403d71e",
                mime: "image/webp",
                name: "thumbnail_buzo1.1}.webp",
                path: null,
                size: 1.3,
                width: 156,
                height: 156,
              },
            },
            hash: "buzo1_1_708403d71e",
            ext: ".webp",
            mime: "image/webp",
            size: 7.44,
            url: "/uploads/buzo1_1_708403d71e.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-08-13T21:15:45.510Z",
            updatedAt: "2023-08-13T21:15:45.510Z",
          },
        },
      },
      categories: {
        data: [
          {
            id: 1,
            attributes: {
              title: "men",
              desc: "Men clothes",
              createdAt: "2023-08-13T21:16:00.587Z",
              updatedAt: "2023-08-13T21:16:00.587Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
          {
            id: 2,
            attributes: {
              title: "Women",
              desc: "women clothes",
              createdAt: "2023-08-13T21:16:15.739Z",
              updatedAt: "2023-08-13T21:16:15.739Z",
              publishedAt: "2023-08-13T21:32:18.139Z",
            },
          },
        ],
      },
      sub_categories: {
        data: [
          {
            id: 2,
            attributes: {
              title: "Hoodies",
              createdAt: "2023-08-13T21:17:49.253Z",
              updatedAt: "2023-08-13T21:36:47.554Z",
              publishedAt: "2023-08-13T21:32:28.708Z",
            },
          },
        ],
      },
    },
  },
]

interface Props {
  catId?: string
  maxPrice: number
  sortBy: string
  subCats: Array<string>
}

const List = ({ catId, maxPrice, sortBy, subCats }: Props) => {
  const [productsData, setProductsData] = useState<Array<PreProduct>>([])

  // const filters = encodeURIComponent(
  //   JSON.stringify({
  //     categories: {
  //       title: {
  //         $eq: catId,
  //       },
  //     },
  //     sub_categories: {
  //       title: {
  //         $in: subCats,
  //       },
  //     },
  //     price: {
  //       $lte: maxPrice,
  //     },
  //   })
  // )

  const subCatsFilters = subCats.map((el) => `[filters][sub_categories][id][$eq]=${el}`)
  const filters = [
    `[filters][categories][title][$eq]=${catId}`,
    ...subCatsFilters,
    `[filters][price][$lte]=${maxPrice}${sortBy && `&sort=price:${sortBy}`}`,
  ]

  const apiUrl: string =
    import.meta.env.VITE_STRAPI_API_URL + `/products?populate=*&${filters.join("&")}`
  const { fetchData, loading, error } = useFetch(apiUrl)

  useEffect(() => {
    setProductsData(fetchData)
  }, [fetchData])

  return (
    <div className={styles.List}>
      {loading
        ? "Loading..."
        : error
        ? "Something went wrong!"
        : productsData?.map((item) => {
            return <Card item={item.attributes} id={item.id} key={item.id}></Card>
          })}
    </div>
  )
}

export default List
