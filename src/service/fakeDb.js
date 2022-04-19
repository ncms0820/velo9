const fakeDb = {
  content: [
    {
      postId: 1,
      title: "title",
      introduce: "introduce",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          fileName: null,
        },
      },
      postThumbnail: null,
    },
    {
      postId: 2,
      title: "1",
      introduce: "1",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          fileName: null,
        },
      },
      postThumbnail: null,
    },
    {
      postId: 3,
      title: "2",
      introduce: "2",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          fileName: null,
        },
      },
      postThumbnail: null,
    },
    {
      postId: 4,
      title: "3",
      introduce: "3",
      loveCount: 0,
      member: {
        nickname: "admin",
        memberThumbnail: {
          fileName: null,
        },
      },
      postThumbnail: null,
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
    unpaged: false,
    paged: true,
  },
  last: true,
  totalPages: 1,
  totalElements: 4,
  size: 20,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  first: true,
  numberOfElements: 4,
  empty: false,
};

export default fakeDb;
