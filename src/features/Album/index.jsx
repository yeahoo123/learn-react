import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature() {
    const albumList = [
        {
            id: 1,
            name: "Top 100 rap Việt",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/1/8/5/41850afe72ca1683c0b5ce15dc2b6cdb.jpg"
        },
        {
            id: 2,
            name: "Top 100 rap Việt",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/1/8/5/41850afe72ca1683c0b5ce15dc2b6cdb.jpg"
        },
        {
            id: 3,
            name: "Top 100 rap Việt",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/1/8/5/41850afe72ca1683c0b5ce15dc2b6cdb.jpg"
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;