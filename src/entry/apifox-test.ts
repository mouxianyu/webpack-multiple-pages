const url = 'http://127.0.0.1:4523/m1/5209024-4875226-default/v1/tagType/all'

fetch(url, {
    method: 'POST'
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

// 分支 feature-rebase-test-20240924 做了一些修改
