using System.Text.Json.Serialization;

namespace API.Infrastructure
{
    public class JwtTokenConfig
    {
        [JsonPropertyName("secret")]
        public string Secret { get; set; }

        [JsonPropertyName("issuer")]
        public string Issuer { get; set; }

        [JsonPropertyName("audience")]
        public string Audience { get; set; }

        [JsonPropertyName("accessTokenExpiration")]
        public int AccessTokenExpiration { get; set; }

        [JsonPropertyName("refreshTokenExpiration")]
        public int RefreshTokenExpiration { get; set; }

        [JsonPropertyName("dapperconnection")]
        public string dapperconnection { get; set; }

        [JsonPropertyName("getStatement")]
        public string getStatement { get; set; }

        [JsonPropertyName("Log4netPath")]
        public string Log4netPath { get; set; }

        [JsonPropertyName("Key")]
        public string Key { get; set; }



        



    }
}
