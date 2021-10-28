
module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/video');

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }

        //,
        // if posting in a sub directory, use pathPrefix
        // pathPrefix: '/mysubdir/pathtosite/',
    };
};
