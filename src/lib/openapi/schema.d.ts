/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/posts": {
    /**
     * ポストする
     * @description Authorization ヘッダーを必要とします
     */
    post: {
      /** @description ポストの内容 */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["postContent"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["post"];
          };
        };
      };
    };
  };
  "/api/posts/{postId}": {
    /**
     * 一つのポストを取得する
     * @description Authorization ヘッダーを必要とします
     */
    get: {
      parameters: {
        path: {
          postId: string;
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["postDetail"];
          };
        };
      };
    };
    /**
     * ポストを削除する
     * @description Authorization ヘッダーを必要とします
     */
    delete: {
      parameters: {
        path: {
          postId: string;
        };
      };
      responses: {
        /** @description no content */
        204: {
          content: never;
        };
      };
    };
  };
  "/api/posts/{postId}/likes": {
    /**
     * ポストにいいねした人を取得する
     * @description Authorization ヘッダーを必要とします
     */
    get: {
      parameters: {
        path: {
          postId: string;
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["user"][];
          };
        };
      };
    };
  };
  "/api/posts/like": {
    /**
     * ポストにいいねする
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description いいねしたいポスト */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["postId"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["postId"];
          };
        };
      };
    };
  };
  "/api/posts/unlike": {
    /**
     * ポストへのいいねを取り消す
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description いいねを取り消したいポスト */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["postId"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["postId"];
          };
        };
      };
    };
  };
  "/api/posts/comments": {
    /**
     * コメントする
     * @description Authorization ヘッダーを必要とします
     */
    post: {
      /** @description コメントの内容 */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["createComment"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["comment"];
          };
        };
      };
    };
  };
  "/api/posts/comments/{commentId}": {
    /**
     * コメントを削除する
     * @description Authorization ヘッダーを必要とします
     */
    delete: {
      parameters: {
        path: {
          commentId: string;
        };
      };
      responses: {
        /** @description no content */
        204: {
          content: never;
        };
      };
    };
  };
  "/api/posts/replies": {
    /**
     * リプライする
     * @description Authorization ヘッダーを必要とします
     */
    post: {
      /** @description リプライの内容 */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["createReply"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["reply"];
          };
        };
      };
    };
  };
  "/api/posts/replies/{replyId}": {
    /**
     * リプライを削除する
     * @description Authorization ヘッダーを必要とします
     */
    delete: {
      parameters: {
        path: {
          replyId: string;
        };
      };
      responses: {
        /** @description no content */
        204: {
          content: never;
        };
      };
    };
  };
  "/api/posts/timeline": {
    /**
     * タイムラインを取得する
     * @description Authorization ヘッダーを必要とします
     */
    get: {
      parameters: {
        query?: {
          cursor?: string;
          limit?: number;
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["postsWithCursor"];
          };
        };
      };
    };
  };
  "/api/users/{userName}": {
    /**
     * ユーザーのプロフィールを取得する
     * @description Authorization ヘッダーは必要ありません
     */
    get: {
      parameters: {
        path: {
          userName: string;
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["userDetail"];
          };
        };
      };
    };
  };
  "/api/users/{userName}/posts": {
    /**
     * ユーザーのポスト一覧を取得する
     * @description Authorization ヘッダーを必要とします
     */
    get: {
      parameters: {
        query?: {
          cursor?: string;
          limit?: number;
        };
        path: {
          userName: string;
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["postsWithCursor"];
          };
        };
      };
    };
  };
  "/api/users/{userName}/mutuals": {
    /**
     * ユーザーとの相互フォローを取得する
     * @description Authorization ヘッダーは必要ありません
     */
    get: {
      parameters: {
        path: {
          userName: string;
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["user"][];
          };
        };
      };
    };
  };
  "/api/follows/follow": {
    /**
     * ユーザーをフォローする
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description フォローしたいユーザー */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["userName"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["userName"];
          };
        };
      };
    };
  };
  "/api/follows/unfollow": {
    /**
     * ユーザーのフォローを外す
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description フォロー解除したいユーザー */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["userName"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["userName"];
          };
        };
      };
    };
  };
  "/api/follows/requests": {
    /**
     * フォローリクエストを取得する
     * @description Authorization ヘッダーを必要とします
     */
    get: {
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["user"][];
          };
        };
      };
    };
  };
  "/api/follows/reject": {
    /**
     * フォローリクエストを拒否する
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description フォローリクエストを拒否したいユーザー */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["userName"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["userName"];
          };
        };
      };
    };
  };
  "/api/settings/profile": {
    /**
     * プロフィールを取得する
     * @description Authorization ヘッダーを必要とします
     */
    get: {
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["profile"];
          };
        };
      };
    };
    /**
     * プロフィールを設定する
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description プロフィールの内容 */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["userSettings"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["userSettings"];
          };
        };
      };
    };
  };
  "/api/settings/profile/userName": {
    /**
     * ユーザー名を変更する
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description 新しいユーザー名 */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["userName"];
        };
      };
      responses: {
        /** @description successful operation */
        200: {
          content: {
            "application/json": components["schemas"]["userName"];
          };
        };
      };
    };
  };
  "/api/settings/profile/icon": {
    /**
     * アイコンを設定する
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description アイコン画像 */
      requestBody?: {
        content: {
          "multipart/form-data": string;
        };
      };
      responses: {
        /** @description no content */
        204: {
          content: never;
        };
      };
    };
  };
  "/api/settings/profile/bgImage": {
    /**
     * 背景画像を設定する
     * @description Authorization ヘッダーを必要とします
     */
    put: {
      /** @description 背景画像 */
      requestBody?: {
        content: {
          "multipart/form-data": string;
        };
      };
      responses: {
        /** @description no content */
        204: {
          content: never;
        };
      };
    };
  };
  "/api/settings/account": {
    /**
     * アカウントを削除する
     * @description Authorization ヘッダーを必要とします
     */
    delete: {
      responses: {
        /** @description no content */
        204: {
          content: never;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    userName: {
      userName?: string;
    };
    userSettings: {
      displayName?: string;
      biography?: string;
    };
    userDisplay: {
      userName?: string;
      displayName?: string;
      iconUrl?: string;
      bgImageUrl?: string;
    };
    profile: {
      userName?: string;
      displayName?: string;
      biography?: string;
      iconUrl?: string;
      bgImageUrl?: string;
    };
    user: {
      userName?: string;
      displayName?: string;
      biography?: string;
      /** Format: date-time */
      createdAt?: string;
      followingStatus?: string;
      iconUrl?: string;
      bgImageUrl?: string;
    };
    userDetail: {
      userName?: string;
      displayName?: string;
      biography?: string;
      /** Format: date-time */
      createdAt?: string;
      mutuals?: number;
      followingStatus?: string;
      iconUrl?: string;
      bgImageUrl?: string;
    };
    url: {
      url?: string;
    };
    postId: {
      postId?: string;
    };
    postContent: {
      content?: string;
    };
    post: {
      postId?: string;
      poster?: components["schemas"]["userDisplay"];
      content?: string;
      likes?: number;
      liked?: boolean;
      comments?: number;
      /** Format: date-time */
      createdAt?: string;
    };
    postDetail: {
      postId?: string;
      poster?: components["schemas"]["userDisplay"];
      content?: string;
      likes?: number;
      liked?: boolean;
      comments?: components["schemas"]["comment"][];
      /** Format: date-time */
      createdAt?: string;
    };
    postsWithCursor: {
      posts?: components["schemas"]["post"][];
      nextCursor?: string;
    };
    createComment: {
      postId?: string;
      content?: string;
    };
    comment: {
      commentId?: string;
      commenter?: components["schemas"]["userDisplay"];
      content?: string;
      replies?: components["schemas"]["reply"][];
      /** Format: date-time */
      createdAt?: string;
    };
    createReply: {
      commentId?: string;
      content?: string;
    };
    reply: {
      replyId?: string;
      replier?: components["schemas"]["userDisplay"];
      content?: string;
      /** Format: date-time */
      createdAt?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
