'use strict';

angular.module('tinacious.fluidVid', [])
  .directive('fluidVideo', function ($log) {
    return {
      link: function (scope, elem, attrs) {
        var videoType = attrs.videoType,
            videoId = attrs.videoId,
            videoCode;

        // get the video id
        if (!videoId) {
          $log.error('Specify a video ID');
        }

        if (!videoType) {
          $log.error('Specify type, either \'youtube\' or \'vimeo\'');
        }

        // video code based on video type
        if (videoId && videoType) {
          switch (videoType) {
            case 'youtube':
              videoCode = '<iframe src="http://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
              break;

            case 'vimeo':
              videoCode = '<iframe src="http://player.vimeo.com/video/' + videoId + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
              break;
            
            default:
              $log.error('Sorry, the type "' + videoType + '" is not currently supported. Please use either \'youtube\' or \'vimeo\'');
          }

          // inect responsive video
          elem.replaceWith('<div class="responsive-video">' + videoCode + '</div>');

          // add required responsive video styles
          angular.element(document).find('head').append('<style type="text/css">.responsive-video iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%;} .responsive-video {position: relative; padding-bottom: 56.25%; height: 0;}</style>');
        }
      }

    };
  });
