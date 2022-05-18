
export default function (blogs, findSortData) {
  let sortedBlog = ''
  if (findSortData.sort && findSortData.sort !== 'id'){
    sortedBlog = blogs.sort((a,b)=> a[findSortData.sort].localeCompare(b[findSortData.sort]))
  } else if (findSortData.sort === 'id'){
    sortedBlog = blogs.sort((a,b) => a.id-b.id)
  } else{
     sortedBlog = blogs
    }
    
    const findBlog = sortedBlog.filter(item => item.title.includes(findSortData.find))
    
 return findBlog
}