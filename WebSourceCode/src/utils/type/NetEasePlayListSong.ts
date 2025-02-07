/*
 * # Copyright (c) 2023. 秋城落叶, Inc. All Rights Reserved
 * # @作者         : 秋城落叶(QiuChenly)
 * # @邮件         : 1925374620@qq.com
 * # @文件         : 项目 [qqmusic] - NetEasePlayListSong.ts
 * # @修改时间    : 2023-03-15 03:40:41
 * # @上次修改    : 2023/3/15 上午3:40
 */

export interface NeteasePlayListSongs {
    code: number
    list: NeteasePlayListSongsList[]
}

export interface NeteasePlayListSongsList {
    album: Album
    author: Author[]
    author_simple: string
    mid: number
    title: string
    publishTime: number

    docid: number
    cloud: boolean
}

export interface Album {
    id: number
    name: string
    pic: number
    picUrl: string
    pic_str?: string
    tns: string[]
}

export interface Author {
    alias: any[]
    id: number
    name: string
    tns: any[]
}
