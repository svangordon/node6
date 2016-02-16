function Video (submittedBy , url, title, desc, id) {
	this.submittedBy = submittedBy;
	this.url = url;
	this.title = title;
	this.desc = desc;
	this.id = id;
	this.votes = {
		up : 1,
		down : 0
	}
}
Video.prototype.upvote = function () {
	this.votes.up += 1;
}
Video.prototype.downvote = function () {
	this.votes.down -=1;
}


function VideoList () {
	this.length = 0;
	this.videos = {}
}

VideoList.prototype.addVideo = function (submittedBy,url,title,desc) {
	this.videos[this.length] = new Video(submittedBy,url,title,desc, this.length);
	this.length += 1
}

VideoList.prototype.getById = function (id) {
	return this.videos[id]
}

VideoList.prototype.stringify = function () {
	return JSON.stringify(this.videos, null, 4)
}

VideoList.prototype.setVideos = function (jsonFile) {
	this.videos = JSON.parse(jsonFile);
	this.length = this.videos.length
}

var submissions = new VideoList();


module.exports = {
	submissions : submissions,
}