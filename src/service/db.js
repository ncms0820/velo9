import axios from "axios";

export const fakeDbNew = axios
  .get("http://localhost:8080")
  .then((resolve) => {
    return resolve.data;
  })
  .catch((error) => console.log(error.message));

export const fakeDbOld = {
  content: [
    {
      postId: 1,
      title: "1",
      introduce:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      },
    },
    {
      postId: 2,
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: "https://i.picsum.photos/id/694/200/200.jpg?hmac=XDsL53lxiWu9Ht6OLBlFVliuBDn24o7KV0pAqMFKHbk",
      },
    },
    {
      postId: 3,
      title: "2",
      introduce:
        "(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: "https://i.picsum.photos/id/395/200/200.jpg?hmac=wwuALTmMrTRCklDqZ8tkCheruznT4KWlx3IlRc0ISts",
      },
    },
    {
      postId: 4,
      title: "3",
      introduce:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: "https://i.picsum.photos/id/522/200/200.jpg?hmac=-4K81k9CA5C9S2DWiH5kP8rMvaAPk2LByYZHP9ejTjA",
      },
    },
    {
      postId: 5,
      title: "3",
      introduce:
        "essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: "https://i.picsum.photos/id/368/200/200.jpg?hmac=ej5Lmr5qh7f88zx85PnlHj2GKfwrNNWf6-lACRJ34qI",
      },
    },
    {
      postId: 6,
      title: "3",
      introduce:
        "essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: "https://i.picsum.photos/id/368/200/200.jpg?hmac=ej5Lmr5qh7f88zx85PnlHj2GKfwrNNWf6-lACRJ34qI",
      },
    },
    {
      postId: 7,
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      postId: 8,
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
    {
      title: "1",
      introduce:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          id: null,
          uuid: null,
          name: null,
          path: null,
          fileName: "null_null",
          sfileName: "s_null_null",
          sfileNameWithPath: "null\\s_null_null",
          fileNameWithPath: "null\\null_null",
        },
      },
      postThumbnail: {
        uuid: null,
        name: null,
        path: null,
      },
    },
  ],
  pageable: {
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 20,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalElements: 7,
  totalPages: 1,
  size: 20,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  first: true,
  numberOfElements: 7,
  empty: false,
};
