<VAST version="3.0" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <Ad id="20001">
        <InLine>
            <AdSystem version="4.0">iabtechlab</AdSystem>
            <AdTitle>iabtechlab video ad</AdTitle>
            <Pricing model="cpm" currency="USD">
                <![CDATA[ 25.00 ]]>
            </Pricing>
            <!-- <Error>http://example.com/error</Error> -->
            <!-- <Impression id="Impression-ID">http://example.com/track/impression</Impression> -->
            <Creatives>
                <Creative id="5480" sequence="1">
                    <Linear>
                        <Duration>00:00:16</Duration>
                        <!-- <TrackingEvents>
                            <Tracking event="start">http://example.com/tracking/start</Tracking>
                            <Tracking event="firstQuartile">http://example.com/tracking/firstQuartile</Tracking>
                            <Tracking event="midpoint">http://example.com/tracking/midpoint</Tracking>
                            <Tracking event="thirdQuartile">http://example.com/tracking/thirdQuartile</Tracking>
                            <Tracking event="complete">http://example.com/tracking/complete</Tracking>
                            <Tracking event="progress" offset="00:00:10">http://example.com/tracking/progress-10</Tracking>
                        </TrackingEvents> -->
                        <VideoClicks>
                            <ClickThrough id="blog">
                                <![CDATA[https://iabtechlab.com]]>
                            </ClickThrough>
                        </VideoClicks>
                        <MediaFiles>
                            <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="500" width="400" height="300" minBitrate="360" maxBitrate="1080" scalable="1" maintainAspectRatio="1" codec="0" apiFramework="VAST">
                                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>
                            </MediaFile>
                        </MediaFiles>


                    </Linear>
                </Creative>
            </Creatives>
            <Extensions>
                <Extension type="iab-Count">
                    <total_available>
                        <![CDATA[ 2 ]]>
                    </total_available>
                </Extension>
            </Extensions>
        </InLine>
    </Ad>
</VAST>