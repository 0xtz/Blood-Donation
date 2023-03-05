/** @return { import("next-auth/adapters").Adapter } */

export default function CustemPrismaAdapter(client: any, options = {}) {
  return {
    async createUser(user: any) {
      console.log("createUser", user);
      return;
    },
    async getUser(id: string) {
      console.log("getUser", id);
      return;
    },
    async getUserByEmail(email: any) {
      console.log("getUserByEmail", email);
      return;
    },
    async getUserByAccount({ providerAccountId, provider }: any) {
      console.log("getUserByAccount", providerAccountId, provider);
      return;
    },
    async updateUser(user: any) {
      console.log("updateUser", user);
      return;
    },
  };
}
