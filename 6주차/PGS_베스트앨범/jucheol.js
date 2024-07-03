// 1차 시도 (성공)
function solution(genres, plays) {
    // 장르별 정보를 저장할 해시 맵 생성
    const genreMap = new Map();

    // 모든 노래를 순회하며 장르별 정보 수집
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const playCount = plays[i];
        
        // 해당 장르가 맵에 없으면 초기화
        if (!genreMap.has(genre)) {
            genreMap.set(genre, {
                totalPlays: 0,  // 장르의 총 재생 횟수
                songs: []       // 장르에 속한 노래들의 정보
            });
        }
        
        // 현재 장르의 정보 가져오기
        const genreInfo = genreMap.get(genre);
        
        // 장르의 총 재생 횟수 증가
        genreInfo.totalPlays += playCount;
        
        // 노래 정보 추가 (인덱스와 재생 횟수)
        genreInfo.songs.push({index: i, playCount: playCount});
    }

    // 결과를 저장할 배열
    const result = [];
    
    // 장르를 총 재생 횟수에 따라 정렬
    // genreMap 항목을 배열로 변환
    const genreEntries = Array.from(genreMap.entries());
    // 변환된 배열을 정렬
    const sortedGenres = genreEntries.sort((a, b) => {
        const totalPlaysA = a[1].totalPlays;
        const totalPlaysB = b[1].totalPlays;
        return totalPlaysB - totalPlaysA;
    });
    
    // 정렬된 장르 순서대로 처리
    for (const [genre, genreInfo] of sortedGenres) {
        // 각 장르 내에서 노래를 재생 횟수에 따라 정렬
        genreInfo.songs.sort((a, b) => {
            if (b.playCount !== a.playCount) {
                return b.playCount - a.playCount;  // 재생 횟수 많은 순
            }
            return a.index - b.index;  // 재생 횟수가 같으면 고유 번호가 낮은 순
        });
        
        // 상위 2개 노래 선택 (1개일 경우 1개만 선택)
        const topSongs = genreInfo.songs.slice(0, 2);
        
        // 결과 배열에 선택된 노래들의 고유 번호 추가
        for (const song of topSongs) {
            result.push(song.index);
        }
    }

    // 최종 결과 반환
    return result;
}