import wrapper from './wrapper';

export default {
  generate: ({ link }) => {
    return wrapper.generate({
      title: 'Reset Password',
      content: `
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
          <tbody>
            <tr>
              <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                    <img width="160" src="https://clodeo.com//img/home/clodeo-logo.png" title="logo"
                                        alt="logo">
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tbody>
                                        <tr>
                                            <td style="padding: 15px 35px 35px;">
                                                <h1
                                                    style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                                    Reset password</h1>
                                                <span
                                                    style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                <p
                                                    style="color:#455056; font-size:15px;line-height:24px; margin-top: 0;">
                                                    A unique link to reset your password has been generated for you. To reset your password,
                                                    click the following link and follow the instructions.
                                                </p>
                                                <a href="${link}" style="text-decoration: none;margin-top:200px;background: linear-gradient(270deg,#45a9ff,#147ee3);border-radius: 110px;padding: 10px 35px;color:#fff">Reset
                                                    Password</a>
                                            </td>
                                        </tr>
    
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                <p
                                    style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      `
    })
  }
}