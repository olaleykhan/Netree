export interface IUser {
 firstName: string
 lastName: string
 email: string
 avatar: string
 links?: ILink[]
}

interface ILink {
  name: string
  url: string,
  icon: string

}
